/* eslint-disable react/prop-types */
import { getCourses } from '../../services/courses'
import { useState, useEffect } from 'react'
import CourseCards from '../shared/CourseCards'

const CourseIndex = ({ toggle, setToggle }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const theCourses = await getCourses()
      setCourses(theCourses)
    }
    fetchCourses()
  }, [toggle])

  const coursesArr = courses.map((course) => {
    const date = new Date(course.createdAt)
    return (
      <CourseCards
        key={course._id}
        date={date}
        course={course}
        setToggle={setToggle}
      />
    )
  })
  return <div className='course-index'>{coursesArr}</div>
}
export default CourseIndex
