'use client'

import styles from './Post.module.css';
import {useEffect, useRef} from "react";
import Button from "@/components/common/Button";

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
      <div className={styles.titleWrapper}>
        <div>

        </div>
        <div className={styles.uploadThumbnail}>
          <Button
              className={styles.uploadThumbnailButton}
              name={'upload thumbnail'}
          />
        </div>
        <div className={styles.titleOverlay}>
          <input
              ref={inputRef}
              className={styles.titleInput}
              value={props.title}
              onChange={e => props.onChange(e.target.value)}
              placeholder="Please enter a title"
          />
        </div>

      </div>
  )
}