import { footerItems } from '../../constants/constants'
import cls from './Footer.module.scss'
const Footer = () => {
	return (
		<footer className={cls.footer}>
			<div className={cls.footer__body}>
				<div className={cls.footer__layout}>
					{footerItems.map((section, index) => (
						<div key={index + 1}>
							<h2 className={cls.footer__title}>{section.title}</h2>
							<ul className={cls.footer__list}>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a href={link.href}>{link.text}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
