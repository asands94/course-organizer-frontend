import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse } from '../services/courses'
import CourseCards from '../components/courses/CourseCards'

const CourseShow = () => {
  const [course, setCourse] = useState({})
  const [toggle, setToggle] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchCourse = async () => {
      const soloCourse = await getCourse(id)
      setCourse(soloCourse)
    }
    fetchCourse()
  }, [id])
  const date = new Date(course.createdAt)
  return (
    <div>
      <CourseCards date={date} setToggle={setToggle} course={course} />
    </div>
  )
}
export default CourseShow
