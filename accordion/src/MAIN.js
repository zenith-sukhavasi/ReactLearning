import questions from "./DATA";
import QUESTION from "./QUESTION";




const MAIN = () => {
    console.log(questions)
    return ( 
       <div className="main">
           <h1 className='h1'>Questions and answers about login</h1>
           <div className="questions"> 
             {questions.map((question) =>(<QUESTION key={question.id} question={question}/>))}
           </div>
       </div>
     );
}
 
export default MAIN;