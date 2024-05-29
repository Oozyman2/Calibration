import { useState, useRef } from "react";
import "./grocery.css";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";

const Grocerylist = () => {
  const [todos, settodos] = useState([]);
  const [task, setTask] = useState("");
  const [updateState, setupdateState] = useState(false);
  const getIndex = useRef(0);
  const userId = useRef(0);
  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateState == false) {
      const id = userId.current++; // Increases UserId by 1
      // console.log(id);
      //if(task.length < 3)return;
      const currentTodo = { id: id, task: task };
      settodos((prev) => [currentTodo, ...prev]);
      reset();
      console.log(todos);
    } else {
      let index = todos.findIndex((todo) => todo.id === editingID);
      if (index !== -1) {
        todos[index].task = task;
      }
      settodos((prev) => [...prev]);
      setupdateState((prev) => !prev);

      console.log((todos[editingID].id = editingID));
    }
  };

  const reset = () => {
    setTask("");
  };

  const [editingID, seteditingID] = useState("");
  const saveEdit = (todoID) => {
    alert("Edit was clicked " + todoID);
  };
  const deleteTodo = (id) => {
    let newTodo = todos.filter((item) => {
      return item.id != id;
    });
    settodos(newTodo);
  };

  const editTodo = (id) => {
    getIndex.current = id;
    let itemz = todos.filter((it) => {
      return it.id == id;
    });
    setTask(itemz[0].task);
    console.log(itemz);

    seteditingID(itemz[0].id);
    setupdateState((prev) => !prev);
    return;

    let newTodo = todos.map((item) => {
      return { ...item, [e.target.id]: e.target.value };
    });
    settodos();

    console.log(id);
  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Grocery List</label>
        <input
          type="text"
          name=""
          id="Name"
          value={task}
          onChange={handleChange}
        />
        {updateState == false ? (
          <button className="addTask" type="submit" disabled={task.length < 3}>
            Add
          </button>
        ) : (
          <button className="updateTask" disabled={task.length < 3}>
            Update Task
          </button>
        )}
      </form>

      <div className="tableSection">
        {todos.map((item) => {
          return (
            <div className="task" key={item.id}>
              <span>{item.task}</span>
              <div className="actionBtn">
                <button className="del" onClick={() => deleteTodo(item.id)}>
                <RiDeleteBin4Fill />
                </button>
                <button className="edit" onClick={(e) => editTodo(item.id)}>
                <BiSolidEdit />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Grocerylist;
