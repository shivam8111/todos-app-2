import React , {useState} from 'react';
import './App.css';

function App() {
  const [todos , setTodos] = useState([]);
  const [name , setName] = useState('');


  const createTodo = () => {
    const todo = {
      name,
      complete: false,
      id : Math.random
    }
    setTodos([ ...todos ,  todo])
    setName('')
  }
  const handleChange = (e) =>{
    setName(e.target.value)

  }
  const toggleTask = (id) =>{
   const updatedTodos = todos.map(todo =>{
      if(todo.id === id){
        todo.complete  = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
  const deleteTodo = (id) =>{
    const updatedTodo =  todos.filter(todo => todo.id !== id);
    setTodos(updatedTodo);
  }



  return (
    <div>
      <div>
      <input placeholder='enter text' value={name} onChange={handleChange} />
      <button onClick={createTodo}>create todo</button>

      </div>
      {
        todos.map((todo) => <Todocomponent  key={todo.id} {...todo} toggleTask={toggleTask} deleteTodo={deleteTodo}/>)
      }
  
    </div>

  )
}

export default App;
 
const Todocomponent = ({name , complete , id , toggleTask , deleteTodo}) =>{
  return <div style={{
    backgroundColor : complete ? 'lightgreen' : 'lightblue',
    color : 'black',
    width : '300px',
    cursor : 'hover',
    marginBottom : '4px',
    marginTop : '4px',
    padding : '10px',
    display :'flex',
    justifyContent:'space-around'
  }}>
    {name}
    <button onClick={() => toggleTask(id)}>{complete ? 'mark incomplete ' : 'mark complete'}</button>
    <button onClick={() => deleteTodo(id)}>X</button>
    <button >U</button>
  </div>

}
