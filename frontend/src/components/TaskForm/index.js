import './styles.css'

function TaskForm() {
    return (
        <form action="" method="get" className="form">
            <input type="text" className="task-input" placeholder="Adicionar tarefa" />
            <div className="buttons">
              <button type="submit" className="btn add-task-btn">Adicionar</button>
              <button className="btn clear-btn">Limpar</button>
            </div>
          </form>
    );
}

export default TaskForm;