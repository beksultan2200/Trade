import Image from 'next/image'
import { benefitsItems } from '../../constants/constants'
import cls from './Benefits.module.scss'

const Benefits = () => {
	return (
		<section className={cls.benefits}>
			<div className={cls.benefits__container}>
				<h4>Почему мы ?</h4>
				<div className={cls.benefits__list}>
					{benefitsItems.map(item => (
						<div key={item.id} className={cls.benefits__list__item}>
							<Image
								src={item.icon}
								height={78}
								width={78}
								alt='benefits icon'
							/>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Benefits
