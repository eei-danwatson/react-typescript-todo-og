import React, { useState } from "react";
import Todo from "./ToDo";
import { Project } from "./Types";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>();

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const addProject = () => {
    console.log("add project clicked");
}

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} />
        ))}
      </ul>

      <button onClick={addProject}>Add Project</button>
      <div>
            <h2>Add a Project</h2>
            <div>
                <label htmlFor="projectTitle">Title:</label>
                <input
                    id="projectTitle"
                    type="text"
                    value={newProject?.title || ""}
                    onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value } as Project)
                    }
                />
            </div>
            <div>
            <label htmlFor="projectDescription">Description:</label>
            <input
                id="projectDescription"
                type="text"
                value={newProject?.description || ""}
                onChange={(e) =>
                setNewProject({
                    ...newProject,
                    description: e.target.value,
                } as Project)
                }
            />
            </div>
        
            <div>
            <label htmlFor="projectActionItems">Action Items:</label>
            <input
                id="projectActionItems"
                type="text"
                value={newProject?.actionItems || ""}
                onChange={(e) =>
                setNewProject({
                    ...newProject,
                    actionItems: e.target.value.split(","),
                } as Project)
                }
            />
            </div>
        
            <div>
            <label htmlFor="projectDateStarted">Date Started:</label>
            <input
                id="projectDateStarted"
                type="date"
                value={
                newProject?.DateStarted
                    ? newProject.DateStarted.toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) =>
                setNewProject({
                    ...newProject,
                    DateStarted: new Date(e.target.value),
                } as Project)
                }
            />
            </div>
        
            <div>
            <label htmlFor="projectDueDate">Due Date:</label>
            <input
                id="projectDueDate"
                type="date"
                value={
                newProject?.DueDate
                    ? newProject.DueDate.toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) =>
                setNewProject({
                    ...newProject,
                    DueDate: new Date(e.target.value),
                } as Project)
                }
            />
            </div>
        
            <div>
            <label htmlFor="projectBudget">Budget:</label>
            <input
                id="projectBudget"
                type="text"
                value={newProject?.budget || ""}
                onChange={(e) =>
                setNewProject({
                    ...newProject,
                    budget: parseFloat(e.target.value),
                } as Project)
                }
            />
            </div>
            <button onClick={addProject}>Add Project</button>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p>Actions:</p>
                        <ul>
                            {project.actionItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>Started: {project.DateStarted.toDateString()}</p>
                        <p>Due: {project.DueDate.toDateString()}</p>
                        <p>Budget: {project.budget}</p>
                    </div>
                ))
                }
            </div>
        </div>
    </div>
  );
};

export default App;