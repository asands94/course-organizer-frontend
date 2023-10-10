/* eslint-disable react/prop-types */
import { getCourses } from '../../services/course'
import { useState, useEffect } from 'react'
import CourseCards from './CourseCards'

const CourseIndex = ({ toggle, setToggle }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses()
      setCourses(courses)
    }
    fetchCourses()
  }, [toggle])

  const coursesArr = courses.map((course) => (
    <CourseCards key={course._id} course={course} setToggle={setToggle} />
  ))
  return <div className='course-index'>{coursesArr}</div>
}
export default CourseIndex
