'use client'

import {useEffect, useMemo, useState} from 'react';
import styles from './MarkdownEditor.module.css';

export interface MarkdownViewerProps {
  content: string;
  showSidebar: boolean;
}

interface NavItem {
  id: string;
  text: string;
  level: number;
}

export default function MarkdownViewer(prop: MarkdownViewerProps) {
  const [activeId, setActiveId] = useState<string>('');
  const markdownText = prop.content

  const {html: parsedHtml, navItems} = useMemo(() => {
    if (!markdownText) return {html: '', navItems: []}

    const lines = markdownText.split('\n')
    let html = ''
    let inList = false
    const items: NavItem[] = []
    let headerCount = 0

    lines.forEach((line) => {
      let parsedLine = line.replace(/</g, '&lt').replace(/>/g, '&gt') // Basic sanitization

      // Headers
      if (parsedLine.startsWith('# ')) {
        const text = parsedLine.slice(2)
        const id = `header-${headerCount++}`
        parsedLine = `<h1 id="${id}" class="${styles.mdH1}">${text}</h1>`
        items.push({id, text, level: 1})
      } else if (parsedLine.startsWith('## ')) {
        const text = parsedLine.slice(3)
        const id = `header-${headerCount++}`
        parsedLine = `<h2 id="${id}" class="${styles.mdH2}">${text}</h2>`
        items.push({id, text, level: 2})
      } else if (parsedLine.startsWith('### ')) {
        const text = parsedLine.slice(4)
        const id = `header-${headerCount++}`
        parsedLine = `<h3 id="${id}" class="${styles.mdH3}">${text}</h3>`
        items.push({id, text, level: 3})
      }
      // Blockquote
      else if (parsedLine.startsWith('> ')) {
        parsedLine = `<blockquote class="${styles.mdQuote}">${parsedLine.slice(2)}</blockquote>`
      }
      // Unordered List
      else if (parsedLine.startsWith('- ')) {
        if (!inList) {
          html += `<ul class="${styles.mdUl}">`
          inList = true
        }
        parsedLine = `<li class="${styles.mdLi}">${parsedLine.slice(2)}</li>`
      }
      // Normal paragraph
      else {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        if (parsedLine.trim().length > 0) {
          parsedLine = `<p class="${styles.mdP}">${parsedLine}</p>`
        } else {
          parsedLine = `<div class="${styles.mdBr}"></div>` // Empty line
        }
      }

      // Inline Styles
      // Bold: **text**
      parsedLine = parsedLine.replace(/\*\*(.*?)\*\*/g, `<strong class="${styles.mdBold}">$1</strong>`)
      // Italic: *text*
      parsedLine = parsedLine.replace(/\*(.*?)\*/g, `<em class="${styles.mdItalic}">$1</em>`)

      html += parsedLine
    })

    if (inList) {
      html += '</ul>'
    }

    return {html, navItems: items}
  }, [markdownText])

  useEffect(() => {
    if (!navItems.length) return

    const handleScroll = () => {
      const headerOffset = 150 // 헤더 높이 및 여유 공간을 고려한 오프셋
      const scrollPosition = window.scrollY + headerOffset
      
      let currentId = ''

      // 모든 헤더를 순회하며 현재 스크롤 위치보다 위에 있는 마지막 헤더를 찾음
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
           if (element.offsetTop <= scrollPosition) {
             currentId = item.id
           }
        }
      }
      
      // 변경 사항이 있을 때만 상태 업데이트
      setActiveId((prev) => (prev !== currentId ? currentId : prev))
    }

    // 스크롤 이벤트 쓰로틀링 (requestAnimationFrame 사용)
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    handleScroll() // 초기 로드 시 위치 설정

    return () => window.removeEventListener('scroll', onScroll)
  }, [navItems, parsedHtml])

  const scrollToHeader = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100 // 상단 고정 헤더 높이만큼 뺌
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({top: y, behavior: 'smooth'})
    }
  }

  return (
      <div className={styles.previewWrapper}>
        <div className={styles.preview}>
          <div
              className="markdown-preview"
              dangerouslySetInnerHTML={{__html: parsedHtml}}
          />
        </div>
        {prop.showSidebar && navItems.length > 0 && (
            <div className={styles.sideBar}>
              {navItems.map((item) => (
                  <div
                      key={item.id}
                      className={`${styles[`navH${item.level}`]} ${styles.navItem} ${activeId === item.id ? styles.active : ''}`}
                      onClick={() => scrollToHeader(item.id)}
                  >
                    {item.text}
                  </div>
              ))}
            </div>
        )}
      </div>
  )
}