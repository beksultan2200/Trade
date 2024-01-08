'use client';
import Image from 'next/image';
import { feedbackItems } from '../../../constants/constants';
import cls from './FeedbackPage.module.scss';
import React from "react";
import {getFeedback} from "../../../lib/store/feedback/feedbackThunk";
import {useAppDispatch} from "../../../lib/hooks/hooks";

const Feedback = () => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(getFeedback());
	}, []);

	return (
		<div>
			<div className={cls.feedback_page__container}>
				<h4 className={cls.feedback_page__title}>Наши отзывы</h4>
				<div className={cls.feedback_page__cards}>
					{feedbackItems.map(item => (
						<div key={item.id} className={cls.feedback_page__card}>
							<div className={cls.feedback_page__card__imgBlock}>
								<Image
									className={cls.feedback_page__card__imgBlock__img}
									src={item.icon}
									alt='Image'
								/>
							</div>
							<div className={cls.feedback_page__card__inside}>
								<h5 className={cls.feedback_page__card__inside__title}>
									{item.title}
								</h5>
								<p className={cls.feedback_page__card__inside__text}>
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Feedback
