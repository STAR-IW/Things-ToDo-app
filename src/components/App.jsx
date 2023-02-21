import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function App() {


  const [itemInput, setItem] = useState("");
  //using array to keep track of all the items the user added
  const [toDoItems, setToDoItems] = useState([]);

  function newItem(event){
     const newVal = event.target.value;
     setItem(newVal);
    
  }
  function addItem(){
    setToDoItems((prevItems)=>{
      return [...prevItems, itemInput];
    });
    setItem("");
  }

  function deleteItem(id){
    setToDoItems((prevItems) =>{
      return prevItems.filter(
        (item, index)=>{
          return index !== id;
        }
      )

    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>Things ToDo</h1>
      </div>
      <div className="form">
        <input onChange={newItem} type="text" value={itemInput}/>
        <button onClick={addItem}>
          <span></span>
        </button>
      </div>
      <div>
        <ul>
        {toDoItems.map((OneToDoItem, index) => (
           <ToDoItem key={index} id={index} text={OneToDoItem}
           onChecked={deleteItem}
           />
        ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
