import { advicesItems } from '../../constants/constants'
import cls from './AdvicesComp.module.scss'

const AdvicesComp = () => {
	return (
		<div className={cls.advices}>
			<div className={cls.advices__content}>
				<h2>Полезные советы по трейдингу</h2>
				<ul className={cls.advices__list}>
					{advicesItems.map(item => (
						<li className={cls.advices__items} key={item.id}>
							<p className={cls.advices__items__title}>{item.title}</p>
							<p className={cls.advices__items__desc}>{item.desc}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AdvicesComp
