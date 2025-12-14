'use client'

import styles from './Post.module.css';
import {useEffect, useRef} from "react";

interface PostTitleProps {
  title: string
  onChange: (content: string) => void
}

export default function PostTitleInput(props: PostTitleProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  return (
      <div>
        <input
            ref={inputRef}
            className={styles.title}
            value={props.title}
            onChange={e => props.onChange(e.target.value)}
            placeholder="Please enter a title"
        />
      </div>
  )
}