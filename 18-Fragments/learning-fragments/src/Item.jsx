import styles from "./Item.module.css"

let Item = ({foodItem}) => {

    const handleBuyButtonClicked = (foodItem) => {
        alert(`Item being Bought ${foodItem}`)
    };
    

    return ( 
    <li className="list-group-item kg-item"> <span className="kg-span">{foodItem}</span>

    <button className={`btn btn-success ${styles.button}`}
    onClick={() =>
        handleBuyButtonClicked(foodItem)}
    >Buy</button>
    
     </li>
    )
}

export default Item;