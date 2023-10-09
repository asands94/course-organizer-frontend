/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../services/auth'

const Signup = ({ setUser }) => {
  const [input, setInput] = useState({ username: '', email: '', password: '' })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signUp(input)
    setUser(user)
    navigate('/')
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          id='username'
          type='text'
          value={input.username}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          id='email'
          type='email'
          value={input.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          id='password'
          type='password'
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  )
}
export default Signup
