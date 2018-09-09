import React from 'react';
import { Link } from 'react-router';

import styles from './CMSPages.css';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const CMSPages = ({ cmsPages }) => (
  (cmsPages && cmsPages.length === 3 ? (
    <div className={styles.CMSPages}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className={styles.CMSPages_title}>
              LATEST <strong>NEWS</strong>
            </div>
            <div className={styles.CMSPages_description}>
              We will always keep you informed about fresh news of our Dental clinic. Moreover, you will find useful articles about dental care,
              the newest technologies in the treatment, oral hygiene, and interesting events related to dentistry and medicine in general.
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className={styles['CMSPages__item-1']}>
              <Link to={`/cmsPages/${cmsPages[0].slug}`} title={cmsPages[0].title}>
                <div className={styles['CMSPages__item-img']}>
                  <img src={image1} alt="" className={styles['CMSPages__item-image']} />
                </div>
                <h2>{cmsPages[0].title}</h2>
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className={styles.CMSPages__item}>
              <Link to={`/cmsPages/${cmsPages[1].slug}`} title={cmsPages[1].title}>
                <div className={styles['CMSPages__item-left']}>
                  <div className={styles['CMSPages__item-img']}>
                    <img src={image2} alt="" className={styles['CMSPages__item-image']} />
                  </div>
                </div>
                <div className={styles['CMSPages__item-right']}>
                <h2>{cmsPages[1].title}</h2>
                <div className={styles.CMSPages__chevron}>
                  <div>
                    <span>></span>
                  </div>
                </div>
                </div>
              </Link>
            </div>
            <div className={styles.CMSPages__item}>
              <Link to={`/cmsPages/${cmsPages[2].slug}`} title={cmsPages[2].title}>
                <div className={styles['CMSPages__item-left']}>
                  <div className={styles['CMSPages__item-img']}>
                    <img src={image3} alt="" className={styles['CMSPages__item-image']} />
                  </div>
                </div>
                <div className={styles['CMSPages__item-right']}>
                  <h2>{cmsPages[2].title}</h2>
                  <div className={styles.CMSPages__chevron}>
                    <div>
                      <span>></span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null)
);

export default CMSPages;
