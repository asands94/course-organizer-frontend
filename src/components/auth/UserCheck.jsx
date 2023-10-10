import { useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'

const UserCheck = () => {
  const [toggle, setToggle] = useState(true)

  const toggleStatus = toggle ? 'Sign Up Instead' : 'Sign In Instead'

  return (
    <div>
      <button
        onClick={() => {
          setToggle((prevToggle) => !prevToggle)
        }}
      >
        {toggleStatus}
      </button>
      {toggle ? <SignIn /> : <Signup />}
    </div>
  )
}
export default UserCheck
