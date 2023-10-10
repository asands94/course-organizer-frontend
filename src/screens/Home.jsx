/* eslint-disable react/prop-types */

import AddCourse from '../components/course/AddCourse'
import CourseIndex from '../components/course/CourseIndex'

const Home = ({ user }) => {
  return (
    <div>
      Hello, {user.username}
      <AddCourse />
      <CourseIndex />
    </div>
  )
}
export default Home
