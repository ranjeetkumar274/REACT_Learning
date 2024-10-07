function Todoitem1(){

  let todoName = "Buy Milk";
  let todoDate = "07/10/2024"
    return (
        <div>
  <div class="row kg-row">
    <div class="col-6">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
  </div>
    );
}

export default Todoitem1;