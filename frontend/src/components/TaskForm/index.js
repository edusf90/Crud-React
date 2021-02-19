import React, {useContext, useState} from 'react'
import { TaskContext} from '../../context/TaskContext'

import './styles.css'

function TaskForm() {
  const {addTask, clearList} = useContext(TaskContext)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);  
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);    
  }

  const handleSubmit = async (event) => {
    event.preventDefault() 
    addTask(title, description)
    setTitle('');  
    setDescription(''); 
  }

  const handleClearList = (event) => {
    event.preventDefault(); 
    clearList();
  }

    return (     
        <form onSubmit={handleSubmit} method="get" className="form">
            <input 
              onChange={handleChangeTitle}
              value={title}
              type="text"
              className="task-input"
              placeholder="Add Tittle..."
              required
            />

            <input
              onChange={handleChangeDescription}
              value={description}
              type="text"
              className="task-input"
              placeholder="Add Description..."
              required

            />
        
            <div className="buttons">
              <button  type="submit" className="btn add-task-btn">Adicionar</button>
              
              <button className="btn clear-btn" onClick={handleClearList}>Limpar</button>
            </div>
          </form>
    );
}

export default TaskForm;