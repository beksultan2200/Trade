import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../../public/logo.jpg'
import { navigationLinks } from '../../../constants/constants'
import cls from './NavbarDesktop.module.scss'
import instagram from '/public/instagram.svg'
import telegram from '/public/telegram.svg'
import whatsapp from '/public/whatsapp.svg'

const NavbarDesktop = () => {
	return (
		<nav className={cls.navbarDesktop}>
			<ul className={cls.navbarDesktop__list}>
				<li>
					<Link href='/'>
						<Image
							className={cls.navbarDesktop__logo}
							src={logo}
							width={120}
							height={120}
							alt='Website logo'
						/>
					</Link>
				</li>
				{navigationLinks.map((item, i) => (
					<li className={cls.navbar__links} key={i + 1}>
						<Link href={item.path}>{item.text}</Link>
					</li>
				))}
				<li>
					<Image
						src={whatsapp}
						width={50}
						height={50}
						alt='social media icons'
					/>
				</li>
				<li>
					<Image
						src={instagram}
						width={50}
						height={50}
						alt='social media icons'
					/>
				</li>
				<li>
					<Image
						src={telegram}
						width={50}
						height={50}
						alt='social media icons'
					/>
				</li>
				<li>
					<Link href='/auth' className={cls.navbarDesktop__btn}>
						Войти
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavbarDesktop
