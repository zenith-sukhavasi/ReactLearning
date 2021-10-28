const Blist = (dat) => {
    console.log(dat)

   console.log(typeof(dat))
   const {data} = dat
   console.log(data)
   console.log(typeof(data))
    
    return ( 
     
        <div className="blist">
              
                {/* {data.map((person)=>{
                  const {id,name,age,image}=person
                 return (
                    
                    <img src={image} alt={name} />
                  )
              })}  */}
            
        </div>
     );
}
 
export default Blist;