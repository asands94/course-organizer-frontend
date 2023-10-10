/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

const CourseCards = ({ course }) => {
  const location = useLocation()

  return (
    <div>
      {location.pathname === '/' ? (
        <Link to={`/courses/${course._id}`}>
          <h3>{course.name}</h3>
        </Link>
      ) : (
        <h3>{course.name}</h3>
      )}

      <Link to={course.url}>{course.name}</Link>
      <p>{course.description}</p>
    </div>
  )
}
export default CourseCards
