import React from 'react'

function Overview({ task, handleDelete, handleEditInput, handleEdit, edit }) {

  return (
    <>
    <div>
      <div>{task.id} {task && task.text}
      <button onClick={() => handleDelete(task.id)}>Delete</button>

  </div> 
    </div>
    </>
  )
}

export default Overview