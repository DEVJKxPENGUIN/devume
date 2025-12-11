'use client'

import styles from './Header.module.css';
import Link from "next/link";

export interface UserBarProps {
  onUpdate: (target: string) => void;
  nickname: string;
  role: string;
}

export const UserBar = (props: UserBarProps) => {
  const nickname = props.nickname
  const role = props.role

  if (role === 'GUEST') {
    return (
        <Link href="/login" className={styles.navLink}>
          Login
        </Link>
    )
  }

  return (
      <div onClick={(e) => {
        e.stopPropagation();
        props.onUpdate('user');
      }} className={styles.navLink}>
        {nickname}
      </div>
  )
}