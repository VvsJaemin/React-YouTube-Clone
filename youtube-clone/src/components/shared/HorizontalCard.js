import React from 'react';
import styles from './HorizontalCard.module.css';
import moment from 'moment';
import { ProcessUploadDate, ProcessViewCount } from '../../utils';
function HorizontalCard({ data }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${data.id}`}>
      <div className={styles.card}>
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={`${data.title}의 썸네일`}
        />
        <div className={styles.info}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.meta}>
            <a
              href={`https://www.youtube.com/channel/${data.channelId}`}
              className={styles.uploader}
            >
              {data.channelTitle}
            </a>
            <div className={styles.view}>{ProcessViewCount(data.viewCount)}</div>
            <div className={styles.date}>{ProcessUploadDate(data.date)}</div>
          </div>
          <div className={styles.desc}>{data.description}</div>
        </div>
      </div>
    </a>
  );
}
export default HorizontalCard;