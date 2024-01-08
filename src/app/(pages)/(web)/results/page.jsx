import Image from 'next/image'
import React from 'react'
import Feedback from '../../../components/Feedback/Feedback'
import cls from './ResultsPage.module.scss'
import working from '/public/worktime.png'

const Page = () => {
	return (
		<div className={cls.results}>
			<h4 className={cls.results__title}>Наши результаты</h4>
			<div className={cls.results__container}>
				<div className={cls.results__heading}>
					<Image src={working} alt='Image' />
					<div>
						<p className={cls.results__heading__text}>
							Хорошие результаты студентов показатель качественной
							образовательной программы и эффективного тренировочного процесса.
						</p>
					</div>
				</div>
			</div>
			<div className={cls.results__citata}>
				<div className={cls.results__citata__container}>
					<h3 className={cls.results__citata__text}>
						"Результаты – это неудачи, преобразованные в обучение."
					</h3>
					<p className={cls.results__citata__author}>Крис Бродбент</p>
				</div>
			</div>
			<div className={cls.results__container}>
				<Feedback />
			</div>
		</div>
	)
}

export default Page
