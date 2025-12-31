'use client'

import styles from './Post.module.css';
import React, {useEffect, useRef, useState} from "react";
import Button from "@/components/common/Button";
import {Image as ImageIcon} from 'lucide-react';
import Image from "next/image";

interface PostTitleProps {
  title: string,
  thumbnail?: string,
  onTitleChange: (title: string) => void,
  onThumbnailChange: (imageUrl: string) => void
}

export default function PostTitleInput(props: PostTitleProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const fileRef = useRef<HTMLInputElement>(null)

  const [thumbnail, setThumbnail] = useState<string>(props.thumbnail || '')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0]
    const imageName = image?.name.split('.')[0] || ''
    if (!image) {
      return
    }

    const paramsToSign = {
      timestamp: Math.round(new Date().getTime() / 1000) as number,
      public_id: imageName,
    }

    const signResult = await fetch('/api/auth/cloudinary', {
      method: 'POST',
      body: JSON.stringify(paramsToSign)
    })

    const {signature} = await signResult.json()

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME || ''
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_KEY || ''

    const formData = new FormData()
    formData.append('file', image)
    formData.append('api_key', apiKey)
    formData.append('timestamp', paramsToSign.timestamp.toString())
    formData.append('public_id', paramsToSign.public_id)
    formData.append('signature', signature)

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      const imageUrl = data.secure_url

      props.onThumbnailChange(imageUrl)
      setThumbnail(imageUrl)
    } catch (e) {
      console.error(e)
    }

  }

  return (
      <div className={styles.titleWrapper}>
        {thumbnail && (
            <Image
                src={thumbnail}
                alt={props.title}
                fill
                className={styles.thumbnail}
                priority
            />
        )}
        <div className={styles.uploadThumbnail}>
          <input
              type="file"
              ref={fileRef}
              accept={'image/*'}
              style={{display: 'none'}}
              onChange={handleFileSelected}
          />
          <Button
              className={styles.uploadThumbnailButton}
              name={'Add thumbnail'}
              icon={<ImageIcon size={18}/>}
              onClick={(e) => {
                e.preventDefault()
                fileRef.current?.click()
              }}
          />
        </div>
        <div className={styles.titleOverlay}>
          <input
              ref={inputRef}
              className={styles.titleInput}
              value={props.title}
              onChange={e => props.onTitleChange(e.target.value)}
              placeholder="Please enter a title"
          />
        </div>

      </div>
  )
}
