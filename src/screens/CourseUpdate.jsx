import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { updateCourse, getCourse } from '../services/course'

const CourseUpdate = () => {
  const [course, setCourse] = useState({})
  const [courseData, setCourseData] = useState({
    name: '',
    url: '',
    image: '',
    description: '',
  })
  const [isUpdated, setIsUpdated] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourse = async () => {
      const soloCourse = await getCourse(id)
      setCourseData(soloCourse)
      setCourse(soloCourse)
    }
    fetchCourse()
  }, [id])

  const handleChange = (e) => {
    const { id, value } = e.target
    setCourseData((prevCourseData) => ({
      ...prevCourseData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updateCourse(id, courseData)
    setIsUpdated(updated)
  }
  if (isUpdated) {
    return navigate('/')
  }

  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          id='name'
          type='text'
          // placeholder={course.name}
          value={courseData.name}
          onChange={handleChange}
        />
        <br />
        <label>Url</label>
        <input
          id='url'
          type='text'
          // placeholder={course.url}
          value={courseData.url}
          onChange={handleChange}
        />
        <br />
        <label>Image</label>
        <input
          id='image'
          type='text'
          value={courseData.image}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <input
          id='description'
          type='text'
          value={courseData.description}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default CourseUpdate
