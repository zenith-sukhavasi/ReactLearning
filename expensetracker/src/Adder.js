const Adder = ({tasks ,v}) => {
    
        let sum=0
        console.log(tasks)
         tasks.forEach(e => {
            sum+=e.price
         });
         sum*=v
         
    return ( <p>$ {
        sum
    }</p>
    );
}
 
export default Adder;