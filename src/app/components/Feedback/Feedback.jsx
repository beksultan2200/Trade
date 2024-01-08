'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import {feedbackItems} from '../../constants/constants'
import cls from './Feedback.module.scss'
import {getFeedback} from "../../lib/store/feedback/feedbackThunk";
import {useAppDispatch, useAppSelector} from "../../lib/hooks/hooks";
import {selectFeedbacks} from "../../lib/store/feedback/feedbackSlice";

function Feedback() {
  const dispatch = useAppDispatch();
  const feedbacks = useAppSelector(selectFeedbacks);
  const [sliderCount, setSliderCount] = React.useState(1)

  React.useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      if (newWidth > 1024) {
        setSliderCount(3)
      } else {
        setSliderCount(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  React.useEffect(() => {
    dispatch(getFeedback());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: sliderCount,
    slidesToScroll: 1,
  }

  return (
    <div className={cls.feedback}>
      <div className={cls.feedback__container}>
        {
          feedbacks.length !== 0 ?
            <Slider {...settings}>
              {
                feedbacks.map(item => (
                  <span key={item.title} className={cls.feedback__card}>
							      <Image
                      src={item.icon}
                      width={100}
                      height={100}
                      alt='User photo'
                    />

							      <div className={cls.feedback__card__info}>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
							      </div>
						      </span>
                ))}
            </Slider>
            :
            <Slider {...settings}>
              {feedbackItems.map(item => (
                <span key={item.title} className={cls.feedback__card}>
							    <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    alt='User photo'
                  />

							    <div className={cls.feedback__card__info}>
								    <h5>{item.title}</h5>
								    <p>{item.desc}</p>
							    </div>
						  </span>
              ))}
            </Slider>
        }
      </div>
      <Link className={cls.feedback__btn} href='/feedback'>
        Читать отзывы {'>>'}
      </Link>
    </div>
  )
}

export default Feedback
