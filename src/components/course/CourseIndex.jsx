import { getCourses } from '../../services/course'
import { useState, useEffect } from 'react'
import CourseCards from './CourseCards'

const CourseIndex = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses()
      setCourses(courses)
    }
    fetchCourses()
  }, [])

  const coursesArr = courses.map((course) => (
    <CourseCards key={course._id} course={course} />
  ))
  return <div>{coursesArr}</div>
}
export default CourseIndex
