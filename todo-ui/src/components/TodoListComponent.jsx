import React, { useEffect } from 'react'
import { completeTodobyId, deleteTodobyId, getAllTodos, unCompleteTodobyId } from '../services/ToDoService';
import { useNavigate } from 'react-router-dom';

export const TodoListComponent = () => {

  const [todos, setTodos] = React.useState([]);

  const listTodos = () => getAllTodos().then((response) => setTodos(response.data))
  .catch((error) => console.error(error));
  
  useEffect(() => {
    // Call the listTodos function when the component automatically renders
    listTodos();
  },[]);
  
  const navigator = useNavigate();

  const toAddTodo = () => navigator('/add-todo');

  const toUpdateTodo = (id) => navigator(`/update-todo/${id}`);

  const deleteTodo = (id) => deleteTodobyId(id).then(() => listTodos()).catch(error => console.error(error));
  
  const completeTodo = (id) => completeTodobyId(id).then(() => listTodos()).catch(error => console.error(error));

  const unCompleteTodo = (id) => unCompleteTodobyId(id).then(() => listTodos()).catch(error => console.error(error));

  return (
    <>
      <section className='container my-5 py-5'>
        <h2 className="text-center" style={{borderBottom : 'black solid 2px', paddingBottom: '2px'}}>List Todos</h2>

        <button className='btn btn-outline-primary my-2' onClick={toAddTodo}>Add Todo

        </button>

        <div>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>Todo Title</th>
                  <th>Todo Description</th>
                  <th>Complete Task</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    todos.map(
                      item => (
                        <tr key={item.id} className=' bg-success'>
                          <td>{item.title}</td>
                          <td
                          >{item.description}</td>
                          <td>{item.completed ? 'Yes' : 'No'}</td>
                          <td>
                            <button className='btn btn-outline-danger me-2' 
                            onClick={() => deleteTodo(item.id)}>
                              Delete
                            </button>
                            <button className='btn btn-outline-success me-2'
                            onClick={() => completeTodo(item.id)} 
                            >Complete</button>
                            <button className='btn btn-outline-warning me-2'
                            onClick={() => unCompleteTodo(item.id)} 
                            >UnComplete</button>
                            <button className='btn btn-outline-info me-2'
                            onClick={() => toUpdateTodo(item.id)}>
                              Update
                            </button>
                          </td>
                        </tr>
                      )
                    )
                  }
              </tbody>
            </table>
        </div>
      </section>
    </>
  )
}
