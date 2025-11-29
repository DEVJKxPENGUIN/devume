'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import styles from './DevumeTitle.module.css';

const DevumeTitle: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const textWrapper = titleRef.current.querySelector('span');
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: true })
          .add({
            targets: '.letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
          }).add({
            targets: '.letter',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
          });
      }
    }
  }, []);

  return (
    <h1 className={styles.title} ref={titleRef}>
      <span>DEVUME</span>
    </h1>
  );
};

export default DevumeTitle;
