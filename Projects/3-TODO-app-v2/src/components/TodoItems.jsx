import Todoitem from "./Todoitem";

const TodoItems = ({todoItems}) =>{
    return (
    <div className="items-container">
        {todoItems.map((item) => (<Todoitem todoDate={item.dueDate} todoName={item.name}></Todoitem>))}
    </div>
    );
};

export default TodoItems;