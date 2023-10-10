/* eslint-disable react/prop-types */
// this file will just be for the style of the cards
const CourseCards = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
      <p>{course.url}</p>
      <p>{course.description}</p>
    </div>
  )
}
export default CourseCards
