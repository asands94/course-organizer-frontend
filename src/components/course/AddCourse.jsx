/* eslint-disable react/prop-types */
import { addCourse } from '../../services/course'
import { useState } from 'react'

const AddCourse = ({ setToggle }) => {
  const [courseData, setCourseData] = useState({
    name: '',
    url: '',
    image: '',
    description: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setCourseData((prevCourseData) => ({
      ...prevCourseData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addCourse(courseData)
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <div>
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
        <input
          id='url'
          type='text'
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
        <button>Add Course</button>
      </form>
    </div>
  )
}
export default AddCourse
