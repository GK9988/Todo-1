import { List, ListItem, ListItemAvatar, ListItemText, Button, Modal, makeStyles,  } from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}))

function Todo(props) {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = React.useState(props.text.todo);

    const updateTodo = (event) => {
        db.collection('todos').doc(props.text.id).set({
            todo: input
        }, {merge: true})

        setOpen(false)
    }

    return (
        <>
        <Modal
        open={open}
        onclose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Modal</h1>
                <form action="">
                    <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <Button disabled = {!input} type='submit' onClick={updateTodo}>Update Todo</Button>
                </form>
            </div>
        </Modal>
        <List className="todo-list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text.todo} secondary="⏰ Dummy Deadline ⏰" />
            </ListItem>
            <Button onClick={e => setOpen(true)}><EditIcon/></Button>
            <Button onClick={event => db.collection('todos').doc(props.text.id).delete() } > <DeleteForeverIcon /></Button>
        </List>
        </>
    )
}

export default Todo
