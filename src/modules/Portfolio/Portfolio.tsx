import { SongsList } from '../shared/SongsList';
import styles from './Portfolio.module.scss';
import songsAll from './../../data/songsTracks.json';
import songsTop from './../../data/songsCards.json';
import { useTranslation } from 'react-i18next';
import { Footer } from '../shared/Footer';
import { useAppSelector } from '../../app/hooks';
import { ServicesSwiper } from '../shared/ServicesSwiper';
import { SongCard } from '../shared/SongCard';
import { Loader } from '../Loader';

export const Portfolio = () => {
  // const songsList = useAppSelector((state) => state.songs.objects);
  const { t } = useTranslation();
  const currentSong = useAppSelector((state) => state.player.currentSong);

  return (
    <div className={styles.portfolio}>
      <div className={styles.stars}>
        <img
          className={`${styles.stars__star} ${styles.stars__star_star1}`}
          src='./images/songs-star-big.png'
          alt='star_ico'
        />
        <img
          className={`${styles.stars__star} ${styles.stars__star_star2}`}
          src='./images/songs-star-avarage.png'
          alt='star_ico'
        />
        <img
          className={`${styles.stars__star} ${styles.stars__star_star3}`}
          src='./images/songs-star-small.png'
          alt='star_ico'
        />
      </div>

      <h2 className={styles.portfolio__title}>{t('portfolio')}</h2>

      <section className={styles.topSongs}>
        <h2 className={styles.topSongs__title}> Our Top Works</h2>

        {songsTop ? (
          <div className={styles.topSongs__swiper}>
            <ServicesSwiper
              type='type1'
              songsCards={songsTop}
              SongToRender={SongCard}
            />
          </div>
        ) : (
          <div className={styles.topSongs__swiper}>
            <Loader />
          </div>
        )}
      </section>

      <section className={styles.allSongs}>
        <div className={styles.stars2}>
          <img
            className={`${styles.stars2__star} ${styles.stars2__star_star1}`}
            src='./images/songs-star-big.png'
            alt='star_ico'
          />
          <img
            className={`${styles.stars2__star} ${styles.stars2__star_star2}`}
            src='./images/songs-star-avarage.png'
            alt='star_ico'
          />
          <img
            className={`${styles.stars2__star} ${styles.stars2__star_star3}`}
            src='./images/songs-star-small.png'
            alt='star_ico'
          />
        </div>
        <h2 className={styles.allSongs__title}>All Our Works</h2>

        <div className={styles.allSongs__main}>
          <img
            className={styles.allSongs__image}
            src={currentSong?.photo || './images/big-logo.png'}
            alt='song_imege'
          />

          <div className={styles.allSongs__list}>
            {songsAll ? (
              <SongsList tracks={songsAll} visual='strip' />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
