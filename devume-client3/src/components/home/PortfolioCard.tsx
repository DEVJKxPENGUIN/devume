import Image from 'next/image';
import styles from './PortfolioCard.module.css';
import {Eye, ThumbsUp} from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  nickname: string;
  image: string;
  thumbs: number;
  views: number;
}

const PortfolioCard = ({
                         title,
                         description,
                         nickname,
                         image,
                         thumbs,
                         views
                       }: PortfolioCardProps) => {
  return (
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} layout="fill" objectFit="cover"/>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.nickname}>{nickname}</span>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <ThumbsUp size={14}/>
              <span>{thumbs}</span>
            </div>
            <div className={styles.statItem}>
              <Eye size={14}/>
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PortfolioCard;
