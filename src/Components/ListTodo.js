import React, { useState } from "react";
import "./ListTodo.css";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Modal } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import db from "../Firebase";
import Firebase from "firebase";
import { blue, lightBlue } from "@material-ui/core/colors";


function ListTodo({ todos }) {
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      display:'flex',
      position: 'absolute',
      width: '78%',
      backgroundColor: '#accbee',
      
      borderRadius:'20px',
      outline: 'none',
      boxShadow: theme.shadows[5],
      boxShadow: '2px 3px 5px black',
      padding: theme.spacing(4, 4, 4,),
      paddingRight: '2px',
      margin: theme.spacing(12,3,1)
    },
    root: {
      borderRadius: '25px',
      color: 'grey',
      padding: '0 10px',
      '&:hover': {
        backgroundColor: '#597b98',
        color: 'white'
      }
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
        <Modal  open={open} onClose={(e) => setOpen(false)}>
          <div className={classes.paper}>
            <input className="modal__input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
               placeholder={currentTodo}
            />
            <Button onClick={updateTodo} className={classes.root} >Update </Button>
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
