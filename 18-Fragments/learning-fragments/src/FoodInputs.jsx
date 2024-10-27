import styles from './FoodInputs.module.css'

const FoodInputs = () => {
return (
    <input type="text" placeholder="Enter Food items here"
    className={styles.foodinput}
    onChange={(event) => console.log(event.target.value)}/>
)
};

export default FoodInputs;