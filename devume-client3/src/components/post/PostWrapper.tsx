'use client'

import styles from './Post.module.css';
import PostTitleInput from "@/components/post/TitleInput";
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import React, {useState} from "react";
import Button from "@/components/common/Button";
import {useAlert} from "@/context/AlertContext";
import {redirect} from "next/navigation";

export interface PostProps {
  title: string;
  content: string;
}

export default function PostWrapper(props: PostProps) {
  const [title, setTitle] = useState<string>(props.title)
  const [content, setContent] = useState<string>(props.content)
  const {showAlert} = useAlert()

  const savePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const response = await fetch('/api/post/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        contents: content
      })
    })

    const data = await response.json()

    const isValid = response.ok && data.status === 0

    if (!isValid) {
      showAlert({
        title: 'Validation Error',
        message: data.message,
        buttons: [
          {
            label: 'ok', variant: 'confirm', onClick: () => {
            }
          }
        ]
      })
      return
    }

    showAlert({
      title: 'submit post',
      message: 'Save your post? [' + title + ']',
      buttons: [
        {
          label: 'cancel', variant: 'cancel', onClick: () => {
          }
        },
        {
          label: 'submit', variant: 'confirm', onClick: async () => {
            const response = await fetch('/api/post', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                // todo id
                title: title,
                contents: content,
                thumbnail: 'todo',
              })
            })

            const data = await response.json()

            console.log(data)

            const postId = data.postid
            redirect('/post/log/' + postId)
          }
        },
      ]
    })
  }

  return (
      <div className={styles.postwrap}>
        <PostTitleInput title={title || ''} onChange={setTitle}/>
        <MarkdownEditor content={content} onChange={setContent}/>
        <div className={styles.submitArea}>
          <Button
              className={styles.write}
              name={"submit"}
              onClick={e => savePost(e)}
          />
        </div>
      </div>
  )
}

