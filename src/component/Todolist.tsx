import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import "../App.css";
function Todolist() {
  interface Todo {
    id: number;
    todo: string;
    status: boolean;
  }

  const complete = (id: number) => {
    const indexClick = listTodo.findIndex((todo) => todo.id === id);
    if (indexClick !== -1) {
      const updateStatus = [...listTodo];
      updateStatus[indexClick].status = !updateStatus[indexClick].status;
      setListTodo(updateStatus);
    }
  };

  const [toDo, setTodo] = useState<string>("");
  const [listTodo, setListTodo] = useState<Todo[]>([]);
  const addToDo = () => {
    const newTodo = {
      id: listTodo.length == 0 ? 1 : listTodo.length + 1,
      todo: toDo,
      status: false,
    };
    setListTodo([...listTodo, newTodo]);
    setTodo("");
  };
  const deleleToDo = (id: number) => {
    const listNew = listTodo.filter((todo) => todo.id !== id);
    setListTodo(listNew);
  };
  return (
    <div className="wrapper">
      <header className=" container">
        <h1>Todo List</h1>
        <p>Get things, one item at the time</p>
        <div className="hr"></div>
      </header>
      <main>
        {listTodo.map((item) => {
          return (
            <div className="wrapper-item  ">
              <div className="item container">
                <p className={item.status == true ? "thought" : "content"}>
                  {item.todo}
                </p>
                <div className="action">
                  <input
                    type="checkbox"
                    className="done"
                    onChange={() => complete(item.id)}
                  />
                  <BsTrash
                    className="icon"
                    onClick={() => deleleToDo(item.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
        {/* 
        <div className="move">
          <p>Move done item at the end?</p>
          <div className="move-now">
            <button></button>
          </div>
        </div> */}
      </main>
      <footer className="container">
        <p>Add to the todo list </p>
        <div className="add ">
          <input
            value={toDo}
            type="text"
            placeholder="Add your list to do ...."
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addToDo}>ADD NOW</button>
        </div>
      </footer>
    </div>
  );
}
export default Todolist;
