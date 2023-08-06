import React, {useEffect,useState} from 'react';
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/questions')
    .then(response => {
      return response.json();
    }).then(questions => {
     setQuestions(questions)
     console.log(questions)
    })
  
  },[]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;