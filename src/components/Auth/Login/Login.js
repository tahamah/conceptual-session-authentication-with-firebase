import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import 'react-toastify/dist/ReactToastify.css'
import '../../../styles/Login.css'
import auth from '../../../firebase.init'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const [signInWithEmailAndPassword, user, loading, hookError] =
        useSignInWithEmailAndPassword(auth)

    const handleEmailChange = (e) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setEmail(e.target.value)
            setErrorEmail('')
        } else {
            setErrorEmail('Invalid Email')
        }
    }
    console.log(email)
    const handlePasswordChange = (e) => {
        const password = e.target.value
        if (password.length >= 6) {
            setPassword(password)
            setErrorPass('')
        } else {
            setErrorPass('minimum 6 characters')
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="text"
                    placeholder="Your Email"
                    onChange={handleEmailChange}
                />
                {errorEmail && <p className="error-message">{errorEmail}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
                {errorPass && <p className="error-message">{errorPass}</p>}
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
