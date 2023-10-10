import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse } from '../services/course'
import CourseCards from '../components/course/CourseCards'

const CourseShow = () => {
  const [course, setCourse] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchCourse = async () => {
      const soloCourse = await getCourse(id)
      setCourse(soloCourse)
    }
    fetchCourse()
  }, [id])

  return (
    <div>
      <CourseCards course={course} />
    </div>
  )
}
export default CourseShow
