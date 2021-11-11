import { createContext, useState } from "react";
import { useContext } from "react";

export const QuestionContext=createContext()
export const QuestionProvider =(props)=>{
    const [id,setId]= useState(0)
    return (
        <QuestionContext.Provider value={[id,setId]}>
        {props.children}
        </QuestionContext.Provider>
    )
}