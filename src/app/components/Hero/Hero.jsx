import Link from 'next/link'
import cls from './Hero.module.scss'
const Hero = () => {
	return (
		<section className={cls.hero}>
			<div className={cls.hero__container}>
				<div className={cls.hero__content}>
					<h1>Aitim Trading</h1>
					<p>Гарантия вашего успеха в мире финансовых возможностей!</p>
					<Link href='#'>Начать</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
