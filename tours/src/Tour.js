import { useState } from "react";


const Tour = ({tour:{id,name,image,info,price} ,removeTour}) => {
  console.log(removeTour)
  // console.log(props.tour.name)
    const [is,setIs]=useState(true)
    const [readMore,setReadMore]=useState(false)
    // console.log(info)
    return (
        <div className="tour">
         {is&&<article>
         <img src={image} alt={name} />
         <div className="det">
          <h3>{name}</h3>
          <h3 className="price">${price}</h3>
          </div>
          <p>{readMore?info:`${info.substring(0,220)}...`}
          <button className="readMore" onClick={()=>setReadMore(!readMore)}>
            {!readMore?"Read More":"Show Less"}
          </button>
          </p>
          {/* <button onClick={()=>{setIs(false) }}>not intrested</button> */}
          <button onClick={()=>{removeTour(id) }}>not intrested</button>
          </article>}
        </div>
        
      );
}
 
export default Tour;
