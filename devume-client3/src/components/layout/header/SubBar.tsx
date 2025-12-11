'use client'

import styles from './Header.module.css';
import Link from "next/link";

export interface SubMenuProps {
  subMenu: SubMenu[];
}

export interface SubMenu {
  title: string;
  link: string;
}

export const SubBar = (props: SubMenuProps) => {
  const subMenus = props.subMenu

  return (
      <div className={styles.subContainer} onClick={(e) => e.stopPropagation()}>
        {
          subMenus.map((subMenu, index) => (
              <Link href={subMenu.link} className={styles.subMenu}>
                {subMenu.title}
              </Link>
          ))
        }
      </div>
  )
}