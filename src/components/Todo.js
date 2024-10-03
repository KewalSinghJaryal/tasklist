import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Sun, Moon, Plus, Trash2 } from "lucide-react";
import logo from "../Images/Kewal Jaryal 96 x 96.svg";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = () => {
    if (title.trim() !== "") {
      setTodos([...todos, { id: Date.now(), title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: darkMode ? "#1a202c" : "#f7fafc",
      color: darkMode ? "#fff" : "#1a202c",
      transition: "background-color 0.3s, color 0.3s",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: darkMode ? "#2d3748" : "#3182ce",
      color: "#fff",
    },
    navTitle: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    content: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1rem",
    },
    inputBox: {
      backgroundColor: darkMode ? "#2d3748" : "#3182ce",
      borderRadius: "0.5rem",
      padding: "1rem",
      marginBottom: "1rem",
    },
    inputBoxTitle: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
      backgroundColor: darkMode ? "#4a5568" : "#edf2f7",
      color: darkMode ? "#fff" : "#1a202c",
      border: "none",
      borderRadius: "0.25rem",
    },
    textarea: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
      backgroundColor: darkMode ? "#4a5568" : "#edf2f7",
      color: darkMode ? "#fff" : "#1a202c",
      border: "none",
      borderRadius: "0.25rem",
      resize: "vertical",
    },
    addButton: {
      width: "100%",
      padding: "0.5rem",
      backgroundColor: darkMode ? "#5a67d8" : "#2c5282",
      color: "#fff",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    todoItem: {
      backgroundColor: darkMode ? "#4a5568" : "#edf2f7",
      borderRadius: "0.25rem",
      padding: "1rem",
      marginBottom: "0.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    todoText: {
      flex: 1,
    },
    todoTitle: {
      fontSize: "1.125rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: darkMode ? "#a3bffa" : "#2c5282",
    },
    todoDescription: {
      color: darkMode ? "#cbd5e0" : "#4a5568",
    },
    deleteButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#e53e3e",
      cursor: "pointer",
      padding: "0.25rem",
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navTitle}>
          {/* <ClipboardList size={24} style={{ marginRight: "0.5rem" }} /> */}
          <img className="me-2" style={{height:"3rem"}}src={logo} alt="" />
          Todo List
        </div>
        <button
          onClick={toggleDarkMode}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {darkMode ? (
            <Sun color="#fff" size={24} />
          ) : (
            <Moon color="#fff" size={24} />
          )}
        </button>
      </nav>
      <div style={styles.content}>
        <motion.div
          style={styles.inputBox}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 style={styles.inputBoxTitle}>Add Task Here</h2>
          <motion.input
            style={styles.input}
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.textarea
            style={styles.textarea}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.button
            onClick={addTodo}
            style={styles.addButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={18} style={{ marginRight: "0.5rem" }} />
            Add Task
          </motion.button>
        </motion.div>
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              style={styles.todoItem}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div style={styles.todoText}>
                <h3 style={styles.todoTitle}>{todo.title}</h3>
                <p style={styles.todoDescription}>{todo.description}</p>
              </div>
              <motion.button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Trash2 size={18} />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Todo;
