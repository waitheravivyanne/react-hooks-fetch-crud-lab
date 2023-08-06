import React from "react";

function QuestionItem({ question, onDelete, onChangeCorrectAnswer}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDelete(){
  fetch(`http://localhost:4000/questions{id}`,{
    method:'DELETE',
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
  })
  .then(()=> {
    console.log(`Question ${id} deleted successfully.`);
    onDelete(id);

  })
  .catch((error) => {
    console.error(`Failed to delete Question ${id}:`, error);
    //document.location.reload();
  })
  }
  function handleChangedAnswer(event) {
    const newCorrectIndex = parseInt(event.target.value);
    onChangeCorrectAnswer(id, newCorrectIndex);}
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangedAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;