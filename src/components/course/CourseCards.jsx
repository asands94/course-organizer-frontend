/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

const CourseCards = ({ course }) => {
  const location = useLocation()

  if (!course.url) {
    return (
      <h1>
        Can't find the course you're looking for. Go back to{' '}
        <Link to='/'>all courses</Link>
      </h1>
    )
  }
  return (
    <div>
      {location.pathname === '/' ? (
        <Link to={`/courses/${course._id}`}>
          <h3>{course.name}</h3>
        </Link>
      ) : (
        <h3>{course.name}</h3>
      )}

      <a
        href={course.url.includes('//') ? course.url : `//${course.url}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {course.name}
      </a>
      <p>{course.description}</p>
    </div>
  )
}
export default CourseCards
