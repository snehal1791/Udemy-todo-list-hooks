import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import useToDoState from "./hooks/useToDoState";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {

    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

    const {todos, addToDo, editToDo, toggleCompletion, removeToDo} = useToDoState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#f1f1f1"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>ToDo With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <ToDoForm addToDo={addToDo} />
                    <ToDoList 
                        todos={todos} 
                        removeToDo={removeToDo}
                        toggleCompletion={toggleCompletion}
                        editToDo={editToDo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;