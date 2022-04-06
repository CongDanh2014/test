import React, { useState } from "react";
import clsx from 'clsx'
import styles from './App.module.scss';

const courses = [
  {
    id: "1",
    name: "Java",
  },
  {
    id: "2",
    name: "C#",
  },
  {
    id: "3",
    name: "Javascript",
  },
];

// function App() {
//   const [counter, setCounter] = useState(courses[1].id)

//   const getInfo = (data) => {
//     //setCounter(counter+1)
//     // setCounter((a) =>{
//     //   console.log(a);
//     //   return a+1
//     // })
//     // setCounter((b) =>{
//     //   console.log(b);
//     //   return b+1
//     // })

//   };
//   console.log(counter)

//   return (
//     <div className="App">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type= "radio"
//             onChange={()=> setCounter(course.id)}
//             checked = {course.id === counter }
//           />
//           {course.name}
//         </div>
//       ))}

//     </div>
//   );
// }

// function App() {
//   const [counter, setCounter] = useState(["1"]);

//   const getInfo = (data) => {
//     if (counter.includes(data)) {
//       setCounter(counter.filter((e)=> e !== data))
//     } else {
//       setCounter([...counter, data]);
//     }
//   };
//   console.log(counter);

//   return (
//     <div className="App">
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input type="checkbox" checked={counter.includes(course.id)} onChange={() => getInfo(course.id)} />
//           {course.name}

//         </div>
//       ))}
//     </div>
//   );
// }



function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    setJobs([...jobs, job]);
    setJob("");
  };

  const handleDelete = (id) => {
    jobs.splice(id.index, 1)
    setJobs([...jobs])
  };

  return (
    <div className="App">
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button  className={clsx(styles.btn, {
        [styles.active]: true
      }
        )} onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} &nbsp;
            <button className={`${styles.btn} ${styles.active}`} onClick={() => handleDelete({ index })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
