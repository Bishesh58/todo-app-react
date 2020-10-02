import React, { useEffect, useState } from "react";
import ListTodo from "./ListTodo";
import "./FormTodo.css";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { blue } from "@material-ui/core/colors";
import db from '../Firebase'
import firebase from 'firebase';


function FormTodo(props) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(['abc','def']);


  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todos})))
    })
  }, [])
  console.log("This is Form Todo",todos)
  const addTodo = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todos: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor: '#8AABFF'
      },
  
    },
    
  }));
  const classes = useStyles();

  return (
    <div className="formTodo">
      <div className="header">
        <h3>To Do List</h3>
      </div>
      <div className="form">
        <form className={classes.root}>
          <input
            placeholder="Add a todo item" maxlength = "30" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <Fab 
            onClick={addTodo}
            disabled={!input}
            type="submit"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </form>
        <ListTodo todos={todos} />
      </div>
    </div>
  );
}

export default FormTodo;
