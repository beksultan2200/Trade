import { Twirl } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '../../../../../public/logo.jpg'
import { navigationLinks } from '../../../constants/constants'
import cls from './NavbarMobile.module.scss'
import instagram from '/public/instagram.svg'
import telegram from '/public/telegram.svg'
import whatsapp from '/public/whatsapp.svg'

const NavbarMobile = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const pathname = usePathname()

	React.useEffect(() => {
		if (pathname) setIsOpen(false)
	}, [pathname])

	const toggle = () => {
		setIsOpen(prev => !prev)
	}
	return (
		<nav className={cls.navbarMobile}>
			<Link href='/'>
				<Image
					className={cls.navbarMobile__logo}
					src={logo}
					width={120}
					height={120}
					alt='Website logo'
				/>
			</Link>
			<ul
				className={
					isOpen ? cls.navbarMobile__list__open : cls.navbarMobile__list
				}
			>
				{navigationLinks.map((item, i) => (
					<li key={i + 1}>
						<Link href={item.path}>{item.text}</Link>
					</li>
				))}
				<div className={cls.navbarMobile__social}>
					<Image
						src={whatsapp}
						width={50}
						height={50}
						alt='social media icons'
					/>
					<Image
						src={instagram}
						width={50}
						height={50}
						alt='social media icons'
					/>
					<Image
						src={telegram}
						width={50}
						height={50}
						alt='social media icons'
					/>
				</div>

				<Link href='/auth' className={cls.navbarMobile__btn}>
					Войти
				</Link>
			</ul>
			<span onClick={toggle}>
				<Twirl color={isOpen ? 'black' : 'white'} size={25} />
			</span>
		</nav>
	)
}

export default NavbarMobile
