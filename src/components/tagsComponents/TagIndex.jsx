/* eslint-disable react/prop-types */
import { getTags } from '../../services/tags'
import { useState, useEffect } from 'react'

const TagIndex = ({ toggle }) => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchTags = async () => {
      const theTags = await getTags()
      setTags(theTags)
    }
    fetchTags()
  }, [toggle])

  const tagsArr = tags.map((tag) => <p key={tag._id}>{tag.name}</p>)
  return (
    <div>
      <p>All Tags: </p>
      {tagsArr}
    </div>
  )
}
export default TagIndex
