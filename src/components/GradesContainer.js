import { useState } from "react";
import CreateNewGrades from "./CreateNewGrades";
import CourseGrades from "./CourseGrades";

const GradesContainer = ({
  id,
  name, 
  studentDetailId
}) => {
  const [ formIsVisible, setFormIsVisible ] = useState(false);
  return (
    <div key={id}>
      <CourseGrades 
        studentId={studentDetailId} 
        courseId={id} 
        name={name}
      />
      <button 
        onClick={() => {setFormIsVisible(prev => !prev)}}
        className="button "
      >
        {formIsVisible ? 'Hide form' : 'Add new grade'}
      </button>
    {formIsVisible && <CreateNewGrades 
      courseId={id}
      setFormIsVisible={setFormIsVisible}
      />}
    </div>
  )
};

export default GradesContainer;