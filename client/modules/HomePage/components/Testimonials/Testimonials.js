import React from 'react';

import styles from './testimonials.css';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const Testimonials = ({ testimonials }) => (
  (testimonials && testimonials.length === 3 ? (
    <div className={styles.Testimonials}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className={styles.Testimonials_title}>
              Testim<strong>onials</strong>
            </div>
            <div className={styles.Testimonials_description}>
              Many of our patients are our friends now, and they recommend our Dental clinic to their friends and come with their children and
              senior parents to us. We are very proud that you entrust the health of your relatives to us!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className={styles.Testimonials__item}>
              <div className={styles['Testimonials__item-image']}>
                <img src={image1} alt={testimonials[0].title} />
              </div>
              <div className={styles['Testimonials__item-description']}>
                {testimonials[0].content}
              </div>
              <div className={styles['Testimonials__item-author']}>
                {testimonials[0].title}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className={styles.Testimonials__item}>
              <div className={styles['Testimonials__item-image']}>
                <img src={image2} alt={testimonials[1].title} />
              </div>
              <div className={styles['Testimonials__item-description']}>
                {testimonials[1].content}
              </div>
              <div className={styles['Testimonials__item-author']}>
                {testimonials[1].title}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className={styles.Testimonials__item}>
              <div className={styles['Testimonials__item-image']}>
                <img src={image3} alt={testimonials[2].title} />
              </div>
              <div className={styles['Testimonials__item-description']}>
                {testimonials[2].content}
              </div>
              <div className={styles['Testimonials__item-author']}>
                  {testimonials[2].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null)
);

export default Testimonials;
