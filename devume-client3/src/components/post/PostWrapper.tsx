'use client'

import styles from './Post.module.css';
import PostTitleInput from "@/components/post/TitleInput";
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import React, {useState} from "react";
import Button from "@/components/common/Button";
import {useAlert} from "@/context/AlertContext";

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
    showAlert({
      title: 'submit post',
      message: 'Save your post? [' + title + ']',
      buttons: [
        {
          label: 'cancel', variant: 'cancel', onClick: () => {
          }
        },
        {
          label: 'submit', variant: 'confirm', onClick: () => {
            // todo save
          }
        },
      ]
    })
  }

  const validate = async () => {



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