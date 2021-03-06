import { FaQuoteRight} from "react-icons/fa";

const Review = ({DATA:{id,name,job,image,text}}) => {
    console.log(id);
    return (
        <div className="review">
            {/* <h2>{id}</h2> */}
            <div className="con">
            <img src={image} alt="" />
            <span className="quote-icon"><FaQuoteRight></FaQuoteRight></span>
            </div>
            <h2>{name}</h2>
            <p>{job}</p>
            <p>{text}</p>
        </div>    
     );
}
 
export default Review;