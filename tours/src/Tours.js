import Tour from "./Tour"



const Tours = ({tours,removeTour}) => {
//     console.log(tours)
//     console.log(typeof(tours))
console.log(removeTour)
   
    return ( 
        <div className="tours">
        {tours.map((tour)=>
             <Tour tour={tour} removeTour={removeTour} key={tour.id}></Tour>
             
        )
        }
         
        </div>
     );
}
 
export default Tours;