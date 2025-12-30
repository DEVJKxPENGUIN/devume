'use client'

import styles from './HeroContent.module.css';
import DevumeTitle from "@/components/home/DevumeTitle";
import Button from "@/components/common/Button";

export interface HeroContentProps {
  title: string;
}

export default function HeroContent(prop: HeroContentProps) {
  return (
      <div className={styles.heroContent}>
        <DevumeTitle/>
        <h2 className={styles.subtitle}>{prop.title}</h2>
        <p className={styles.description}>
          The best place for developers to showcase their working records.
        </p>
        <Button
            className={styles.button}
            name={'Commit your today'}
            onClick={() => {
              window.location.href = '/post'
              // window.history.pushState(null, '', "/post");
            }}
        />
      </div>
  )
}