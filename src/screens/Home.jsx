/* eslint-disable react/prop-types */
import { useState } from 'react'
import AddCourse from '../components/courses/AddCourse'
import CourseIndex from '../components/courses/CourseIndex'
import AddTag from '../components/tagsComponents/AddTag'
import TagIndex from '../components/tagsComponents/TagIndex'

const Home = ({ user }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='home'>
      Hello, {user.username}
      <AddCourse setToggle={setToggle} />
      <AddTag setToggle={setToggle} />
      <TagIndex toggle={toggle} />
      <CourseIndex setToggle={setToggle} toggle={toggle} />
    </div>
  )
}
export default Home
