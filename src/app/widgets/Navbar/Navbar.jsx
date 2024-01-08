'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import cls from './Navbar.module.scss'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'

const Navbar = () => {
	const [isMobile, setIsMobile] = React.useState(false)

	const pathname = usePathname()
	const pathClassMap = {
		'/': cls.navbar,
		'/join': cls.navbar__blue,
		'/mentors': cls.navbar__blue,
		'/advices': cls.navbar__white,
		'/results': cls.navbar__blue && cls.navbar__scrolled__blue,
		'/feedback': cls.navbar__blue,
		'/demo': cls.navbar__white,
	}

	React.useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const className = pathClassMap[pathname] || cls.navbar

	return (
		<header className={className}>
			<div className={cls.container}>
				{isMobile ? <NavbarMobile /> : <NavbarDesktop />}
			</div>
		</header>
	)
}

export default Navbar
