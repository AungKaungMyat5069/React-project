import React, { useEffect, useState } from 'react'
import { createTodo, getTodoById, updateTodo } from '../services/ToDoService';
import { useNavigate, useParams } from 'react-router-dom';

export default function TodoComponent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const navigator = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      if(id){
        getTodoById(id).then( response => {
          const todo = response.data;
          setTitle(todo.title);
          setDescription(todo.description);
          setCompleted(todo.completed);
        }).catch(error => console.error(error));
      }
    }, [id]);

    const saveOrUpdateSubmit = (e) => {
      e.preventDefault();
      
      const todo = {title, description, completed};
      // this is same as above
      // const todo = {
      //   title: title,
      //   description: description,
      //   completed: completed
      // }
      // console.log(todo);

      if(id){
        // update
        updateTodo(id, todo)
        .then(() =>  navigator('/'))
        .catch(error => console.error(error));

      } else {
        createTodo(todo).then(
          response => {
            // console.log(response.data)
            navigator('/');
          }
        ).catch(error => console.error(error));
      }
    }


  return (
    <>
        <section className='container mt-5'>
            <div className="row">
              <div className="col">
                <div className="card">
                  <h4 className="card-header">{ id ? "Update Todo Form" : "Todo Form"}</h4>

                  <div className="card-body">
                    <form >
                      <div className="mb-2">
                        <label className=' form-label h4'>Title</label>
                        <input type="text" className='form-control' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                      </div>

                      <div className="mb-2">
                        <label className=' form-label h4'>Description</label>
                        <input type="text" className='form-control' name='description' value={description} onChange={e => setDescription(e.target.value)} />
                      </div>
                      <button className="btn btn-primary " onClick={saveOrUpdateSubmit}>{id ? "Update Todo" : "Save Todo"}</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </section>

    </>
  )
}
