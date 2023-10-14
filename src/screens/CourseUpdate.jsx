import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  updateCourse,
  getCourse,
  addTagToCourse,
  removeTagFromCourse,
} from '../services/courses'
import { getTags } from '../services/tags'

const CourseUpdate = () => {
  const [course, setCourse] = useState({})
  const [tags, setTags] = useState([])
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
    const fetchTags = async () => {
      const theTags = await getTags()
      setTags(theTags)
    }
    fetchCourse()
    fetchTags(tags)
  }, [id])

  const handleChange = (e) => {
    const { id, value } = e.target
    setCourseData({
      ...course,
      [id]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updateCourse(id, courseData)
    setIsUpdated(updated)
  }
  if (isUpdated) {
    return navigate(`/`)
  }

  return (
    <div className='course-form'>
      {' '}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          id='name'
          type='text'
          value={courseData.name}
          onChange={handleChange}
        />
        <br />
        <label>Url</label>
        <br />
        <input
          id='url'
          type='text'
          value={courseData.url}
          onChange={handleChange}
        />
        <br />
        <label>Image</label>
        <br />
        <input
          id='image'
          type='text'
          value={courseData.image}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          id='description'
          type='text'
          value={courseData.description}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <p>Click to remove a tag</p>
      {course.tags?.map((tag) => (
        <button
          key={tag._id}
          onClick={async (e) => {
            e.preventDefault()
            await removeTagFromCourse(id, tag._id)
          }}
        >
          {tag.name}
        </button>
      ))}
      <br />
      <p>Click to add a tag</p>
      {tags.map((tag) => (
        <button
          key={tag._id}
          onClick={async (e) => {
            e.preventDefault()
            await addTagToCourse(id, tag._id)
          }}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}
export default CourseUpdate
