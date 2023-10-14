/* eslint-disable react/prop-types */
import { removeTagFromCourse } from '../../services/courses'
const RemoveTagFromCourse = ({ course, id }) => {
  return (
    <div>
      <p>Click to remove a tag</p>
      {course.tags?.map((tag) => (
        <button
          key={tag._id}
          onClick={async (e) => {
            e.preventDefault()
            await removeTagFromCourse(id, tag._id)
          }}
        >
          x {tag.name}
        </button>
      ))}
    </div>
  )
}
export default RemoveTagFromCourse
