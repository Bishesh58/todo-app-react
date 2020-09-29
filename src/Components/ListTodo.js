import React from "react";
import "./ListTodo.css";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Fab } from "@material-ui/core";

function ListTodo({ todos }) {
  const removeTodo = (e) => {};

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className="listTodo">
      <ol>
        {todos.map((todo) => {
          return (

            <div className="listTodos">
              
                <li>{todo} </li>

                <div className={classes.root}>
                <Fab color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
                {/* <IconButton
                onClick={removeTodo}
                aria-label="delete"
                color="secondary"
              >
                <DeleteIcon fontSize="large" />
              </IconButton> */}

                <Fab color="secondary" aria-label="delete">
                  <DeleteIcon />
                </Fab>
             </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default ListTodo;
