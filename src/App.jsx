import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verify } from './services/auth'
import Signup from './components/auth/Signup'
import SignIn from './components/auth/SignIn'

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
