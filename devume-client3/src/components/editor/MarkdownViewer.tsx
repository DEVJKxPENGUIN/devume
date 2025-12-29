'use client'

import {useMemo} from 'react';
import styles from './MarkdownEditor.module.css';

export interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer(prop: MarkdownViewerProps) {

  const markdownText = prop.content

  const parsedHtml = useMemo(() => {
    if (!markdownText) return '';

    const lines = markdownText.split('\n');
    let html = '';
    let inList = false;

    lines.forEach((line) => {
      let parsedLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;'); // Basic sanitization

      // Headers
      if (parsedLine.startsWith('# ')) {
        parsedLine = `<h1 class="${styles.mdH1}">${parsedLine.slice(2)}</h1>`;
      } else if (parsedLine.startsWith('## ')) {
        parsedLine = `<h2 class="${styles.mdH2}">${parsedLine.slice(3)}</h2>`;
      } else if (parsedLine.startsWith('### ')) {
        parsedLine = `<h3 class="${styles.mdH3}">${parsedLine.slice(4)}</h3>`;
      }
      // Blockquote
      else if (parsedLine.startsWith('> ')) {
        parsedLine = `<blockquote class="${styles.mdQuote}">${parsedLine.slice(2)}</blockquote>`;
      }
      // Unordered List
      else if (parsedLine.startsWith('- ')) {
        if (!inList) {
          html += `<ul class="${styles.mdUl}">`;
          inList = true;
        }
        parsedLine = `<li class="${styles.mdLi}">${parsedLine.slice(2)}</li>`;
      }
      // Normal paragraph
      else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        if (parsedLine.trim().length > 0) {
          parsedLine = `<p class="${styles.mdP}">${parsedLine}</p>`;
        } else {
          parsedLine = `<div class="${styles.mdBr}"></div>`; // Empty line
        }
      }

      // Inline Styles
      // Bold: **text**
      parsedLine = parsedLine.replace(/\*\*(.*?)\*\*/g, `<strong class="${styles.mdBold}">$1</strong>`);
      // Italic: *text*
      parsedLine = parsedLine.replace(/\*(.*?)\*/g, `<em class="${styles.mdItalic}">$1</em>`);

      html += parsedLine;
    });

    if (inList) {
      html += '</ul>';
    }

    return html;
  }, [markdownText]);

  return (
      <div className={styles.previewArea}>
        <div
            className="markdown-preview"
            dangerouslySetInnerHTML={{__html: parsedHtml}}
        />
      </div>
  )
}