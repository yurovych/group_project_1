import styles from './HomePage.module.scss';

import { Footer } from '../../shared/Footer';
import { Button } from '../../shared/Button';
import { ServicesList } from '../../shared/ServicesList';
import equipmentList from './../../../data/equipmentCards.json';
import servicesList from './../../../data/servicesCards.json';
import songsList from './../../../data/songsCards.json';
import videosList from './../../../data/videos.json';
import { SongsList } from '../../shared/SongsList';
import { ServicesSwiper } from '../../shared/ServicesSwiper';
import { Link } from 'react-router-dom';
import { EquipmentList } from '../../shared/EquipmentList';
import { ContactUs } from '../../shared/ContactUs';
import { ServicesCard } from '../../shared/ServicesCard';
import { EquipmentCard } from '../../shared/EquipmentCard';
import { Loader } from '../../Loader';
import { SongTrackType } from '../../../types/SongTrack';

export const HomePage = () => {
  // const songsList = useAppSelector((state) => state.songs.objects);
  // const servicesList = useAppSelector((state) => state.sevrices.objects);
  // const equipmentList = useAppSelector((state) => state.equipment.objects);
  // const videosList = useAppSelector((state) => state.videos.objects);

  const shuffleSongs = (songs: SongTrackType[]) => {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [songs[i], songs[j]] = [songs[j], songs[i]];
    }

    return songs;
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.topWrapper}>
          <section className={styles.top}>
            <h3 className={styles.top__newSong}>New sound available</h3>

            <div className={styles.top__photo}>
              <img
                className={styles.top__photoItself}
                src='./images/top-photo.jpg'
                alt='foto'
              />
            </div>

            <h1 className={styles.top__title}>
              Make Sound that changes the world
            </h1>

            <h3 className={styles.top__text}>
              Your recording studio is a modern space for creating music that
              combines professional equipment and a cozy atmosphere.
            </h3>

            <div className={styles.top__button}>
              <Button text='Book a studio' />
            </div>
          </section>
        </div>

        <div className={styles.aboutUsWrapper}>
          <section className={styles.aboutUs}>
            <h2 className={styles.aboutUs__title}>
              Place where sound becomes art.
            </h2>

            <div className={styles.aboutUs__photo}>
              <img
                className={styles.aboutUs__photoItself}
                src='./images/about-us-photo.jpg'
                alt='foto'
              />
            </div>

            <p className={styles.aboutUs__text}>
              We are a team of professionals in love with sound. Our studio
              brings together talented engineers, producers and musicians who
              turn ideas into masterpieces.
            </p>

            <div
              className={`${styles.aboutUs__advantages} ${styles.aboutUs__advantages_block1}`}
            >
              <div className={styles.aboutUs__advantage}>
                <img src='./icons/checkmark-filled-ico.svg' alt='checkmark' />
                <p>High-Quality recording</p>
              </div>

              <div className={styles.aboutUs__advantage}>
                <img src='./icons/checkmark-filled-ico.svg' alt='checkmark' />{' '}
                <p>Professional approach</p>
              </div>
            </div>

            <div
              className={`${styles.aboutUs__advantages} ${styles.aboutUs__advantages_block2}`}
            >
              <div className={styles.aboutUs__advantage}>
                <img src='./icons/checkmark-filled-ico.svg' alt='checkmark' />{' '}
                <p>Acoustically prepared space</p>
              </div>

              <div className={styles.aboutUs__advantage}>
                <img src='./icons/checkmark-filled-ico.svg' alt='checkmark' />{' '}
                <p>Access to modern technologies</p>
              </div>
            </div>

            <Link to='./about' className={styles.aboutUs__button}>
              <Button text='More About Us' />
            </Link>
          </section>
        </div>

        <div className={styles.servicesWrapper}>
          <section className={styles.services}>
            <h2 className={styles.services__title}>Our studio services</h2>

            <div className={styles.services__cardsPhone}>
              {servicesList ? (
                <ServicesSwiper
                  type='type1'
                  servicesCards={servicesList}
                  ServiceToRender={ServicesCard}
                />
              ) : (
                <Loader />
              )}
            </div>

            <div className={styles.services__cardsTablet}>
              {servicesList ? (
                <ServicesList cards={servicesList.slice(0, 4)} />
              ) : (
                <Loader />
              )}
            </div>

            <div className={styles.services__cardsDesktop}>
              {servicesList ? (
                <ServicesList cards={servicesList} />
              ) : (
                <Loader />
              )}
            </div>

            <div className={styles.services__viewAll}>
              <Link className={styles.services__viewAll_link} to='./services'>
                View all services
              </Link>
            </div>
          </section>
        </div>

        <div className={styles.ourWorksWrapper}>
          <section className={styles.ourWorks}>
            <h2 className={styles.ourWorks__title}>Our popular works</h2>

            <div className={styles.ourWorks__photo}>
              <img
                className={styles.ourWorks__photoItself}
                src='./images/songs-photo.jpg'
                alt='foto'
              />
            </div>

            {songsList ? (
              <div className={styles.ourWorks__list}>
                <SongsList
                  tracks={shuffleSongs(songsList).slice(0, 5)}
                  visual='strip'
                />
              </div>
            ) : (
              <div className={styles.ourWorks__list}>
                <Loader />
              </div>
            )}

            <Link to='./portfolio' className={styles.ourWorks__button}>
              <Button text='View Portfolio' />
            </Link>
          </section>
        </div>

        <div className={styles.bannerWrapper}>
          <section className={styles.banner}>
            <img
              className={styles.banner__star}
              src='./images/baner-star.png'
              alt='image-star'
            />

            <h2 className={`${styles.banner__text} ${styles.banner__text_1}`}>
              Thinking of learning
            </h2>
            <h2 className={`${styles.banner__text} ${styles.banner__text_2}`}>
              to play the guitar?
            </h2>
            <h2 className={`${styles.banner__text} ${styles.banner__text_3}`}>
              Today is the best day
            </h2>
            <h2 className={`${styles.banner__text} ${styles.banner__text_4}`}>
              to start.
            </h2>
          </section>
        </div>

        <div className={styles.lessonsWrapper}>
          <section className={styles.lessons}>
            {videosList ? (
              <>
                <h2 className={styles.lessons__title}>
                  {videosList[0]?.title}
                </h2>

                <div className={styles.lessons__video}>
                  <video className={styles.lessons__videoItself} controls>
                    <source src={videosList[0]?.video_file} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <h5
                  className={`${styles.lessons__desctiption} ${styles.lessons__desctiption_block1}`}
                >
                  {videosList[0]?.description_blok1}
                </h5>

                <h5
                  className={`${styles.lessons__desctiption} ${styles.lessons__desctiption_block2}`}
                >
                  {videosList[0]?.description_blok2}
                </h5>

                <div className={styles.lessons__button}>
                  <Button text='Text the teacher' />
                </div>
              </>
            ) : (
              <Loader />
            )}
          </section>
        </div>

        <div className={styles.equipmentWrapper}>
          <section className={styles.equipment}>
            <img
              className={`${styles.equipment__star} ${styles.equipment__star_star1}`}
              src='./images/equipment-white-star.png'
              alt='image-star'
            />

            <img
              className={`${styles.equipment__star} ${styles.equipment__star_star2}`}
              src='./images/equipment-white-star.png'
              alt='image-star'
            />

            <h2 className={styles.equipment__title}>Our equipment</h2>

            <div className={styles.equipment__cardsPhone}>
              {equipmentList ? (
                <ServicesSwiper
                  type='type1'
                  equipmentCadrs={equipmentList}
                  EquipmentToRender={EquipmentCard}
                />
              ) : (
                <Loader />
              )}
            </div>

            <div className={styles.equipment__cardsTablet}>
              {equipmentList ? (
                <ServicesSwiper
                  type='type2'
                  equipmentCadrs={equipmentList}
                  EquipmentToRender={EquipmentCard}
                />
              ) : (
                <Loader />
              )}
            </div>

            <div className={styles.equipment__cardsDesktop}>
              {equipmentList ? (
                <EquipmentList cards={equipmentList.slice(0, 4)} />
              ) : (
                <Loader />
              )}
            </div>
          </section>
        </div>

        <div className={styles.testimonialsWrapper}>
          <section className={styles.testimonials}>
            <h2 className={styles.testimonials__title}>Testimonials</h2>

            <div className={styles.testimonials__blocksWrapper}>
              <div
                className={`${styles.testimonials__block} ${styles.testimonials__block_block1}`}
              >
                <img
                  className={`${styles.testimonials__imageQuotes} ${styles.testimonials__imageQuotes_block1}`}
                  src='./icons/white-quotes-ico.svg'
                  alt='image-quotes'
                />

                <div className={styles.testimonials__textContent}>
                  <h4
                    className={`${styles.testimonials__message} ${styles.testimonials__message_block1}`}
                  >
                    Panda Records - modern equipment, good recording quality,
                    friendly staff.
                  </h4>

                  <div>
                    <h4
                      className={`${styles.testimonials__name} ${styles.testimonials__name_block1}`}
                    >
                      Vlad Boichuk
                    </h4>

                    <h5
                      className={`${styles.testimonials__activitie} ${styles.testimonials__activitie_block1}`}
                    >
                      guitar player
                    </h5>
                  </div>
                </div>

                <img
                  className={`${styles.testimonials__personPhoto} ${styles.testimonials__personPhoto_block1}`}
                  src='./images/section-testimonials/photo-block1.png'
                  alt='photo-persone'
                />
              </div>

              <div
                className={`${styles.testimonials__block} ${styles.testimonials__block_block2}`}
              >
                <img
                  className={`${styles.testimonials__imageQuotes} ${styles.testimonials__imageQuotes_block2}`}
                  src='./icons/pink-quotes-ico.svg'
                  alt='image-quotes'
                />

                <div className={styles.testimonials__textContent}>
                  <h4
                    className={`${styles.testimonials__message} ${styles.testimonials__message_block2}`}
                  >
                    I am very pleased with the recording! The sound is clear,
                    without noise, and the mix sounds professional.
                  </h4>

                  <div>
                    <h4
                      className={`${styles.testimonials__name} ${styles.testimonials__name_block2}`}
                    >
                      Olena Galun
                    </h4>

                    <h5
                      className={`${styles.testimonials__activitie} ${styles.testimonials__activitie_block2}`}
                    >
                      singer
                    </h5>
                  </div>
                </div>

                <img
                  className={`${styles.testimonials__personPhoto} ${styles.testimonials__personPhoto_block2}`}
                  src='./images/section-testimonials/photo-block2.png'
                  alt='photo-persone'
                />
              </div>

              <div
                className={`${styles.testimonials__block} ${styles.testimonials__block_block3}`}
              >
                <img
                  className={`${styles.testimonials__imageQuotes} ${styles.testimonials__imageQuotes_block3}`}
                  src='./icons/black-quotes-ico.svg'
                  alt='image-quotes'
                />

                <div className={styles.testimonials__textContent}>
                  <h4
                    className={`${styles.testimonials__message} ${styles.testimonials__message_block3}`}
                  >
                    The studio team is very attentive to details. They helped to
                    adapt the sound to my style!
                  </h4>

                  <div>
                    <h4
                      className={`${styles.testimonials__name} ${styles.testimonials__name_block3}`}
                    >
                      Beata Bango
                    </h4>

                    <h5
                      className={`${styles.testimonials__activitie} ${styles.testimonials__activitie_block3}`}
                    >
                      singer
                    </h5>
                  </div>
                </div>

                <img
                  className={`${styles.testimonials__personPhoto} ${styles.testimonials__personPhoto_block3}`}
                  src='./images/section-testimonials/photo-block3.png'
                  alt='photo-persone'
                />
              </div>
            </div>
          </section>
        </div>

        <ContactUs />

        <Footer />
      </div>
    </>
  );
};
