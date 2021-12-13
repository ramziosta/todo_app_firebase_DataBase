import React from 'react'
import {List, ListItem, ListItemText, Button} from "@material-ui/core";
import './Todo.css'
import db from "./components/utils/firebase"

function Todo(props) {



  return (
    <>
    <List className="TodoList">
      <ListItem>
        <ListItemText primary={props.text} secondary="🔲" />
      </ListItem>
    </List>
  
    </>
  )
}

export default Todo
