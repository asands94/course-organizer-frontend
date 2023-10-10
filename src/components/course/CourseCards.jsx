/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'
import { deleteCourse } from '../../services/course'

const CourseCards = ({ course, setToggle }) => {
  const location = useLocation()

  if (!course.url) {
    return (
      <h1>
        Can't find the course you're looking for. Go back to
        <Link to='/'>all courses</Link>
      </h1>
    )
  }
  return (
    <div className='course-card'>
      {location.pathname === '/' ? (
        <Link to={`/courses/${course._id}`}>
          <h3>{course.name}</h3>
        </Link>
      ) : (
        <h3>{course.name}</h3>
      )}
      <p>{course.description}</p>
      <button>
        <a
          href={course.url.includes('//') ? course.url : `//${course.url}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Go to Site
        </a>
      </button>
      <button
        onClick={() => {
          deleteCourse(course._id)
          setToggle((prevToggle) => !prevToggle)
        }}
      >
        Delete Course
      </button>
    </div>
  )
}
export default CourseCards
