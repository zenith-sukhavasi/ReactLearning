import { useState } from "react";
import Review from "./Review";

import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";




const Reviews = ({DATA}) => {
    const [id,setId]=useState(1)
    console.log(DATA);
    const checkNumber=(num)=>{
        if (num>4) {
            num=1
        }
         else if (num<=0) {
             num=4
         }
        return num
    }
    function rend (){
        let num = Math.ceil( Math.random()*3)
        if(num===id){
            // rend()
            num++
            checkNumber(num)
        }
        console.log(num,id)
        return num
    }
    return ( 
        <div className="reviews">
             {DATA.map((data) => (data.id===id) ?(<Review DATA={data} key={data.id}></Review>):(<p className="hide">hi</p>) )} 
            {/* {DATA.filter((data) =>data.id==id)} */}
                {/* <button onClick={() =>{setId(id-1)}}>--</button>
                <button onClick={() =>{setId(id+1)}}>++</button> */}
            <div className="right">
            <MdKeyboardArrowLeft onClick={() =>{setId(checkNumber(id-1))}} ></MdKeyboardArrowLeft>
            <MdKeyboardArrowRight onClick={() =>{setId(checkNumber(id+1))}} ></MdKeyboardArrowRight>
            </div>
            <button onClick={()=>{setId(rend)}}>random</button>
           
            
          
        </div>
     );
}
 
export default Reviews;