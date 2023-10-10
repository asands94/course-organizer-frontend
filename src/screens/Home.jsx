/* eslint-disable react/prop-types */

const Home = ({ user }) => {
  console.log(user)

  return <div>Hello, {user.username}</div>
}
export default Home
