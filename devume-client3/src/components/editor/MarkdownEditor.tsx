'use client'

import React, {useState} from 'react';
import styles from './MarkdownEditor.module.css';
import MarkdownViewer from "@/components/editor/MarkdownViewer";

export interface MarkdownEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function MarkdownEditor(prop: MarkdownEditorProps) {
  const [markdownText, setMarkdownText] = useState<string>(prop.content);

  return (
      <div className={styles.container}>
        {/* Editor Area */}
        <div className={styles.editorArea}>
        <textarea
            value={markdownText}
            onChange={(e) => {
              setMarkdownText(e.target.value)
              prop.onChange(e.target.value);
            }}
            className={styles.textarea}
            placeholder="# Start typing Markdown..."
        />
        </div>

        {/* Preview Area */}
        <MarkdownViewer content={markdownText}/>
      </div>
  );
};