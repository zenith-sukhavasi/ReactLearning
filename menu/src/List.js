

const List = ({ menu }) => {
    console.log(menu);
    return (
        <div className="List">
            <div className="display">
                {menu.map(menu =>
                (
                    <div className="item">
                        <img src={menu.img} alt="" />
                        <div className="details">
                            <div className="head">
                                <h3>{menu.title}</h3>
                                <p className="price">${menu.price}</p>
                            </div>
                            <p>{menu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;


// menu:{title,price,img}