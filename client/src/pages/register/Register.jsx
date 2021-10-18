import axios from 'axios';
import { useRef } from 'react';
import './register.css';
import { useHistory } from 'react-router';

export default function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();
	const history = useHistory();

	const handleClick = async (e) => {
		e.preventDefault();
		if (passwordAgain.current.value !== password.current.value) {
			password.current.setCustomValidity('Passwords do not match!');
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};
			try {
				await axios.post('/auth/register', user);
				history.push('/login');
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div className='login'>
			<div className='loginWrapper'>
				<div className='loginLeft'>
					<h3 className='loginLogo'>Lamasocial</h3>
					<span className='loginDesc'>
						Connect with friends and the world around you on
						Lamasocial.
					</span>
				</div>
				<div className='loginRight'>
					<form className='loginBox' onSubmit={handleClick}>
						<input
							placeholder='Username'
							ref={username}
							className='loginInput'
							required
						/>
						<input
							placeholder='Email'
							ref={email}
							className='loginInput'
							required
							type='email'
						/>
						<input
							placeholder='Password'
							ref={password}
							className='loginInput'
							required
							type='password'
							minLength='6'
						/>
						<input
							placeholder='Password Again'
							ref={passwordAgain}
							className='loginInput'
							required
							type='password'
						/>
						<button className='loginButton' type='submit'>
							Sign Up
						</button>
						<button className='loginRegisterButton'>
							Log into Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
