import { useContext, useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { QuestionContext } from './QuestionContext';



const QUESTION = ({question:{id,title,info}}) => {

     const [lid,setLid]= useContext(QuestionContext)
     console.log(lid)
    
    const [show,setShow]=useState(id===lid)
    console.log(id,show)
    useEffect(() => {
     setShow(id===lid)
    },[lid]);
      
    return ( 
        <div className="question">
             <div className="head">
             <p>{title}</p>
             <button onClick={() =>show?setLid(0):setLid(id)}>
                 {show ?<AiOutlineMinus></AiOutlineMinus>:<AiOutlinePlus/>} 
             </button>
             </div>
             {show&&<p>{info}</p>}
        </div>
     );
}
 
export default QUESTION;