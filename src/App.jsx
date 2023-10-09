import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verify } from './services/auth'
import Signup from './screens/auth/Signup'
import SignIn from './screens/auth/SignIn'
import Home from './screens/Home'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route
          path='/sign-up'
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route
          path='sign-in'
          element={<SignIn user={user} setUser={setUser} />}
        />
      </Routes>
    </>
  )
}

export default App
