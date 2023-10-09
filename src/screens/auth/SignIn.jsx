/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../services/auth'

const SignIn = ({ setUser }) => {
  const [input, setInput] = useState({ username: '', password: '' })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signIn(input)
    console.log(user)
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
        <label>Password</label>
        <input
          id='password'
          type='password'
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <button>Sign In</button>
      </form>
    </div>
  )
}
export default SignIn
