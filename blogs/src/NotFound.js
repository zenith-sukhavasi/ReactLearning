import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry...</h2>
            <p>the page you looking for is not found</p>
            <Link to="/">BACK to HOME</Link>
        </div>
     );
}
 
export default NotFound;