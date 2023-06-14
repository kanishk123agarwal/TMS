import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from 'react';
import { UpdateTask } from "./UpdateTask";

function TaskCard({ data ,handleEdit,handleDelete}) {
    const { _id, title, description } = data;
    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="button-container">
                <button  className="button"name={_id} onClick={handleEdit}>edit</button>
                <button name={_id} className="button" onClick={handleDelete}>delete</button>
            </div>
        </li>
    );
}

export function ShowTaskList ()  {
    const [task, setTask] = useState([]);
    const [open, setOpen] = useState(false); 
    const [id, setId] = useState(""); 
    const [update, setUpdate] = useState(false); 
    useEffect(() => {
        axios
            // .get("http://localhost:8000/api/task")
            .get("https://taskmanagementapp-a6uo.onrender.com/api/task")
            .then((res) => {
                console.log(res.data);
                setTask(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [update]);

    function handleEdit(e) { 
        setId(e.target.name); 
        setOpen(true);
    }
    function handleUpdate() { 
        console.log("update:", update, !update);
        setUpdate(!update);
    }
    function handleDelete(e) {
        axios.delete(`https://taskmanagementapp-a6uo.onrender.com/api/task/${e.target.name}`);
        // axios.delete(`http://localhost:8000/api/task/${e.target.name}`);

        setTask((data) => {
            return data.filter((task) => task._id !== e.target.name);
        });
    }
    function handleClose() {
        setId("");
        setOpen(false);
    }
  return (
    <section className="container">
      <Link to="/create-task" className="button-new"> 
        <button className="button">New</button>
       </Link>
      <section className="contents">
         <h1>Task</h1>
         <ul className="list-container">
             {task.map((data)=>(
                <TaskCard data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
             ))}
         </ul>
      </section>
      {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateTask
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
    </section>
  );
}


