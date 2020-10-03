import React, { useState } from "react";
import "./ListTodo.css";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Modal } from "@material-ui/core";
import db from "../Firebase";
import Firebase from "firebase";


function ListTodo({ todos }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [currentTodo, setCurrentTodo] = useState();
  const [currentId, setCurrentId] = useState();
  
  const updateTodo = () => {
    
   

    db.collection("todos").doc(currentId).set({
      todos: input},{ merge: true }
    );
    setOpen(false);
    setInput("");
  };
 
  
  return (
    <>
      <div>
        <Modal open={open} onClose={(e) => setOpen(false)}>
          <div className={classes.paper}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
               placeholder={currentTodo}
            />
            <button onClick={updateTodo}>Update </button>
          </div>
        </Modal>
      </div>
      <div className="listTodo">
        <ol>
          {todos.map((todo, index) => {
            return (
              <div className="listTodos">
                <li className="lists">
                  {todo.todo}
                  <div className="buttons">
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={(e) =>{
                        setOpen(true)
                        setCurrentTodo(todo.todo)
                        setCurrentId(todo.id)
                      } }
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      size="small"
                      color="secondary"
                      aria-label="delete"
                      onClick={(e) =>
                        db.collection("todos").doc(todo.id).delete()
                      }
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ListTodo;
