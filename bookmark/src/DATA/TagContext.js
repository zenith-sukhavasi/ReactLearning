import {useState, createContext } from "react";


export const TagContext=createContext()

export const TagProvider =(props) =>{
    const [tags,setTags]=
    useState({Locations:[ ] ,
    Roles:[ ]})

    return(
       <TagContext.Provider  value={[tags,setTags]}>
           <div>
            {/* <FilterJobs></FilterJobs> */}
           {props.children}
          </div>
           </TagContext.Provider>
    )
}