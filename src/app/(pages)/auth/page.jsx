import cls from './Login.module.scss'

const Login = () => {
	return (
		<section className={cls.signIn}>
			<div className={cls.signIn__container}>
				<div className={cls.signIn__form}>
					<h2>Login</h2>
					<form>
						<label htmlFor=''>
							Email
							<input type='text' placeholder='Enter your email' />
						</label>
						<label htmlFor=''>
							Password
							<input type='password' placeholder='Enter your password' />
						</label>
						<div className={cls.signIn__action}>
							<div>
								<input type='checkbox' className={cls.signIn__check} />
								<span>Remember me</span>
							</div>
							<p>Forgot password ?</p>
						</div>
						<button>Login</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Login
