'use client'

import styles from './Header.module.css';
import Link from "next/link";
import {UserBar} from "@/components/layout/header/UserBar";
import {SubBar, SubMenu} from "@/components/layout/header/SubBar";
import {useEffect, useState} from "react";
import {UserProps} from "@/context/UserContext";

export const Bar = (props: UserProps) => {
  const nickname = props.nickname
  const role = props.role
  const [subMenus, setSubMenus] = useState<SubMenu[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuChanged = (target: string) => {
    let subMenu: SubMenu[] = []
    let isMenuOpen = true
    if (target === 'user') {
      subMenu = [
        {title: 'profile', link: '/profile'},
        {title: 'logout', link: '/logout'}
      ]
    } else {
      isMenuOpen = false
    }

    setIsMenuOpen(isMenuOpen)
    setSubMenus(subMenu)
  }

  useEffect(() => {
    const closeMenu = () => {
      handleMenuChanged('')
    }

    if (isMenuOpen) {
      document.addEventListener('click', closeMenu)
    }

    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [isMenuOpen]);

  return (
      <div>
        <div className={styles.container}>
          <Link href="/devume-client3/public" className={styles.logo}>
            DEVUME
          </Link>
          <nav className={styles.nav}>
            <UserBar
                nickname={nickname}
                role={role}
                onUpdate={handleMenuChanged}
            />
          </nav>
        </div>
        <SubBar subMenu={subMenus}/>
      </div>
  )
}
