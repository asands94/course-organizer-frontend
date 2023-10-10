/* eslint-disable react/prop-types */

import AddCourse from '../components/course/AddCourse'

const Home = ({ user }) => {
  return (
    <div>
      Hello, {user.username}
      <AddCourse />
    </div>
  )
}
export default Home
