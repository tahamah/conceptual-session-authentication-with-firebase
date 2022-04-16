import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import '../../../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
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
                <input
                    type="password"
                    placeholder="password"
                    onChange={handlePasswordChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
