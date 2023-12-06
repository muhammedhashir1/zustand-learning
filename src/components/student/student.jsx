import React, { useRef } from "react";
import { useAppStore } from "../../store/appStore";

const Student = () => {
  const [student, addStudent, actors, voteHandle] = useAppStore((state) => [
    state.student,
    state.addStudent,
    state.actors,
    state.voteHandle,
  ]);
  const inputRef = useRef();
  return (
    <div>
      <h5>Student</h5>
      <ul>
        {student.map((student, i) => {
          return (
            <li style={{ listStyle: "none" }} key={i}>
              {student}
            </li>
          );
        })}
      </ul>

      <br />
      <input style={{ width: "100%" }} className="input-field" type="text" ref={inputRef} />
      <button style={{ width: "50%" }} onClick={() => addStudent(inputRef.current.value)}>
        Add New Student
      </button>

      <br />

      <ul>
        {actors.map((actor) => {
          return (
            <li key={actor.id} style={{ listStyle: "none", textAlign: "left" }}>
              {actor.name}
              <button
                onClick={() => {
                  voteHandle(actor.id);
                }}
              >
                {actor.votes}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Student;
