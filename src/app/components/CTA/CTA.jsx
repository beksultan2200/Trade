import Image from 'next/image'
import Link from 'next/link'
import { ctaItems } from '../../constants/constants'
import cls from './CTA.module.scss'

const CTA = () => {
	return (
		<section className={cls.cta}>
			<div className={cls.cta__container}>
				<div className={cls.cta__content}>
					<h2>Присоединяйтесь к нашему комьюнити</h2>
					<p>
						Наше сообщество предоставляет все инструменты, необходимые для
						упрощения процесса обучения дневной торговле. Общайтесь с нашей
						командой и другими трейдерами со всего мира в нашем торговом чате.
					</p>
					<div className={cls.cta__features}>
						{ctaItems.map(item => (
							<div className={cls.cta__features__item}>
								<Image
									src={item.icon}
									alt='cta card icon'
									width={100}
									height={100}
								/>
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
							</div>
						))}
					</div>
					<Link href='#'>Присоединиться</Link>
				</div>
			</div>
		</section>
	)
}

export default CTA
