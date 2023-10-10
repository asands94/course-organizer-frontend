import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verify } from './services/auth'
import Home from './screens/Home'
import Layout from './components/layout/Layout'
import UserCheck from './components/auth/UserCheck'
import CourseShow from './screens/CourseShow'
import './styles/main.css'

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
      <Layout>
        <Routes>
          <Route
            path='/'
            element={
              user ? <Home user={user} /> : <UserCheck setUser={setUser} />
            }
          />
          <Route path='/courses/:id' element={<CourseShow />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
