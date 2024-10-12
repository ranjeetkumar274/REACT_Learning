import Item from './Item';
const FoodItems = () => {

    let foodItems = ['Sabji', 'Green Vegetables', 'Roti', 'Sallad', 'Milk','Paneer'];
    
    return  (<ul className="list-group">
    {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
    ))}
</ul>
);
};

export default FoodItems;