/* eslint-disable react/prop-types */
import { addTag } from '../../services/tags'
import { useState } from 'react'

const AddTag = ({ setToggle }) => {
  const [tagData, setTagData] = useState({
    name: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setTagData((prevTagData) => ({
      ...prevTagData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addTag(tagData)
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <div className='tag-form'>
      <form onSubmit={handleSubmit}>
        <label>Tag Name</label>
        <br />
        <input
          id='name'
          type='text'
          value={tagData.name}
          onChange={handleChange}
        />
        <button>Add Tag</button>
      </form>
    </div>
  )
}
export default AddTag
