import React, { useState } from "react";
import ListTodo from "./ListTodo";
import "./FormTodo.css";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

function FormTodo(props) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
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
            type="submit"
            color="primary"
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
