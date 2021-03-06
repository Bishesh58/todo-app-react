import React, { useEffect, useState } from "react";
import ListTodo from "./ListTodo";
import "./FormTodo.css";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
        <h3>ToDo App</h3>
      </div>
      <div className="form">
        <form className={classes.root}>
          <input 
            placeholder="Enter your task" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <Fab 
            onClick={addTodo}
            disabled={!input.trim()}
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
