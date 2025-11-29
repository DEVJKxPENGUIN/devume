"use client";

import { useEffect, useRef } from 'react';
import styles from './BackgroundLoop.module.css';

const BackgroundLoop = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // 2배 느리게 재생
    }
  }, []);

  return (
      <div className={styles.background}>
        <video
            ref={videoRef}
            src="/backgroundloop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.video}
        />
      </div>
  );
};

export default BackgroundLoop;
