'use client'

import Image from 'next/image';
import styles from './BlogCard.module.css';
import {Eye, ThumbsUp} from 'lucide-react';
import {useRouter} from 'next/navigation';

export interface BlogCardProps {
  blogId: string;
  title: string;
  summary: string;
  nickname: string;
  image: string;
  thumbs: number;
  views: number;
}

export default function BlogCard(prop: BlogCardProps) {

  const router = useRouter()

  return (
      <div
          className={styles.card}
          onClick={() => router.push(`/post/log/${prop.blogId}`)}
      >
        <div className={styles.imageWrapper}>
          <Image
              src={prop.image}
              alt={prop.title}
              fill
              style={{objectFit: 'cover'}}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{prop.title}</h3>
          <p className={styles.summary}>{prop.summary}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.nickname}>{prop.nickname}</span>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <ThumbsUp size={14}/>
              <span>{prop.thumbs}</span>
            </div>
            <div className={styles.statItem}>
              <Eye size={14}/>
              <span>{prop.views}</span>
            </div>
          </div>
        </div>
      </div>
  );
};