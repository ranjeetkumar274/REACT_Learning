function AddTodo(){
   return (<div className="">
    <div class="row kg-row">
    <div class="col-6">
      <input type="text" placeholder="Enter Todo Here"/>
    </div>
    <div class="col-4">
      <input type="Date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success kg-button">Add</button>
    </div>
  </div>
  </div>);
}

export default AddTodo;