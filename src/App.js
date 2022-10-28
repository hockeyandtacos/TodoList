import React, { useState, useRef, useEffect } from "react";
import ItemList from "./ItemList";
import { v4 as uuid} from "uuid"

function App() {
  const LOCAL_STORAGE_KEY = 'testreact.items'
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || false
  )
  const nameRef = useRef();
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function handleAddItem(e) {
    const name = nameRef.current.value
    setItems(prevItems => {
      return [...prevItems, {id:uuid(), name:name, completed:false}]
    })
    nameRef.current.value = null
  }

  function toggleItem(id) {
    const itemsCopy = [...items];
    const item = itemsCopy.find(todo => todo.id === id);
    item.completed = !item.completed;
    setItems(itemsCopy)
  }

  function RemoveAll(e) {
    setItems([])
  }

  function RemoveAllCompleted(e) {
    const itemsCopy = items.filter(item => 
      !item.completed
    )
    setItems(itemsCopy)
  }

  return (
    <>
      <div>
        <h1>To-Do List</h1>
      </div>
      <hr/>
      <div>
        <ItemList items={items} toggleItem={toggleItem}/>
      </div>
      <hr/>
      <div>
        <input ref={nameRef}/>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={RemoveAllCompleted}>Remove all completed</button>
        <button onClick={RemoveAll}>Remove all</button>
      </div>
    </>
  );
}

export default App;
