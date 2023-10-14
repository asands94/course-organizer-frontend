/* eslint-disable react/prop-types */
import { addTagToCourse } from '../../services/courses'

const AddTagToCourse = ({ course, tags, id }) => {
  if (!tags || course === undefined || course.tags === undefined) {
    return 'Loading...'
  }
  const allTags = course.tags.map((tag) => tag.name)

  return (
    <div>
      <p>Click to add a tag</p>
      {tags?.map(
        (tag) =>
          !allTags.includes(tag.name) && (
            <button
              key={tag._id}
              onClick={async (e) => {
                e.preventDefault()
                await addTagToCourse(id, tag._id)
              }}
            >
              x {tag.name}
            </button>
          )
      )}
    </div>
  )
}
export default AddTagToCourse
