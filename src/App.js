// import './App.css';
// import Overview from './components/Overview';
// import { useState } from 'react';
// import Counter from './components/Counter'

// function App() {
//   const [tasks,setTasks] = useState([])
//   const [input,setInput] = useState('')
//   const [id, setId] = useState(0)
//   const [edit,setEdit] = useState(false)
//   const [editTask, setEditTask] = useState('')

//   const handleClick = () => {
//     setTasks([...tasks,{id: id + 1 , text: input}])
//     setId(id+1)
//   }

//   const handleDelete = (id) => {
//     console.log(id)
//     const updatedTasks = tasks.filter((t) => t.id !== id)
//     setTasks(updatedTasks)
//   }

//   const handleEditInput = (id) => {
//     const [updatedTasks] = tasks.filter((t) => t.id === id)
//     if (id === updatedTasks.id) {
//       setEdit(!edit)
//     }
//   }

//   const handleEdit = (id) => {
//     const updatedTasks = tasks.map((t) => {
//       if (t.id === id) {
//         return {...t, text: editTask}
//       } else {
//         return t
//       }
//     })
//     setTasks(updatedTasks)
//     setEdit(!edit)
//   }
  
//   return (
//     <div className="App">
//       <Counter/>
//       {tasks && tasks.map((task) => {
//       return (
//       <div>
//         <Overview key={task.id} task={task} handleDelete={handleDelete} handleEditInput={handleEditInput} handleEdit={handleEdit} edit={edit} />
//         {edit === true ? <button onClick={() => handleEdit(task.id)}>resubmit</button> : 
//         <button onClick={() => handleEditInput(task.id)}>Edit</button>}
//       </div>
//       )})}
//       {edit && <>
//         <label>edit</label> <input type='text' value={editTask} onChange={(e) => setEditTask(e.target.value)}/> 
//         </>}
//       <input type="text" id="task" name="task" value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={() => handleClick()}>Submit</button>
//     </div>
//   );
// }

// export default App;

// Class Components - React
import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
    }

    this.mountCounter = () => this.setState({ mount:true })
    this.unmountCounter = () => this.setState({ mount:false })

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
  }

  render() {
    return <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>UnMount Counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp}/> : null}
      </div>
  }
}

export default App