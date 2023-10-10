/* eslint-disable react/prop-types */
import { useState } from 'react'
import AddCourse from '../components/course/AddCourse'
import CourseIndex from '../components/course/CourseIndex'

const Home = ({ user }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='home'>
      Hello, {user.username}
      <AddCourse setToggle={setToggle} />
      <CourseIndex setToggle={setToggle} toggle={toggle} />
    </div>
  )
}
export default Home
