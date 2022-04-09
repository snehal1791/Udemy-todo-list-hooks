import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ToDo from "./ToDo";

function ToDoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <ToDo 
                            id={todo.id}
                            task={todo.task} 
                            key={todo.id}
                            completed={todo.completed}
                            removeToDo={props.removeToDo}
                            toggleCompletion={props.toggleCompletion} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default ToDoList;