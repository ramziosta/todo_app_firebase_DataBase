import React, { useEffect } from "react";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./components/utils/firebase";
import firebase from "firebase/compat/app"

function App() {
  //state for the todo list
  const [todos, setTodos] = React.useState([]);
  // state for the new todo item
  const [input, setInput] = React.useState("");
  console.log("🟥" + input);
  console.log("🟩" + db);
  //when the app loads it will listen to the database and fetch new todos and they get added/removed and we use   useEffect(() =>, dependencies)
  useEffect(() => {
    // code here runs when the app is loaded
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snapshot) => {

      setTodos(snapshot.docs.map(
        (doc) => doc.data().todo
        
        ));
    })
  }, []);

  //adds the new list item to the list
  const addTodo = (e) => {
    //prevents page refresh when button is submited and deletes the state memory
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    //clears the input field
    setInput("");
  };
  const addNewTodo = (e) => setInput(e.target.value);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {/* the form added to allow the button to submit when hit enter */}
      <form>
        <FormControl>
          <InputLabel>🔳 Add a Todo</InputLabel>
          <Input value={input} label="Outlined primary" onChange={addNewTodo} />
        </FormControl>

        {/* disabled: disable adding null value */}
        <Button
          variant="contained"
          disabled={!input}
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add ToDos
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
