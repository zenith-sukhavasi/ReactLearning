import { useState } from "react"
import data from "./DATA"
import List from "./List"


const Menu = () => {
    const category = ["ALL",...new Set(data.map((menu) => menu.category))]
    const [cat,setCat]=useState("ALL")
    console.log(category)
    console.log(cat)
    return ( 
        <div className="menu">
            <div className="list">
                {category.map((category) =>(
                     <button onClick={() => setCat(category) } className="category" key={category}>{category}</button>))}
            </div>
            <List menu={cat==="ALL"?data:data.filter(item => item.category === cat)}></List>
        </div>
     );
}
 
export default Menu;