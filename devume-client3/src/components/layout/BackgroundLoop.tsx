"use client";

import styles from './BackgroundLoop.module.css';
import ColorBends from "@/components/layout/ColorBlends";

const BackgroundLoop = () => {
  // const videoRef = useRef<HTMLVideoElement>(null)

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.6; // 2배 느리게 재생
  //   }
  // }, [])

  return (
      <div className={styles.background}>
        {/*<video*/}
        {/*    ref={videoRef}*/}
        {/*    src="/backgroundloop.mp4"*/}
        {/*    autoPlay*/}
        {/*    muted*/}
        {/*    loop*/}
        {/*    playsInline*/}
        {/*    className={styles.video}*/}
        {/*/>*/}
        <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent
        />
        {/*<div className={styles.backdrop}></div>*/}
      </div>
  )
}

export default BackgroundLoop
