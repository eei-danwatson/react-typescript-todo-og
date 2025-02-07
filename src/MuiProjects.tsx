import React, { FC, useState, useEffect, useMemo, useCallback } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Todo from "./ToDo";
import { Project } from "./Types";

const MuiProjects: FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project | null>(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const addProject = () => {
    if (newProject !== null) {
      setProjects([...projects, newProject]);
      setNewProject(null);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <TextField
        id="projectTitle"
        label="Title"
        variant="outlined"
        value={newProject?.title || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewProject({
            ...newProject,
            title: e.target.value,
          } as Project)
        }
        style={{ display: "block", marginBottom: "1rem" }}
      />

      {/* Description */}
      <TextField
        id="projectDescription"
        label="Description"
        variant="outlined"
        value={newProject?.description || ""}
        onChange={(e: any) =>
          setNewProject({
            ...newProject,
            description: e.target.value,
          } as Project)
        }
        style={{ display: "block", marginBottom: "1rem" }}
      />

      {/* Action Items (comma separated) */}
      <TextField
        id="projectActionItems"
        label="Action Items (comma-separated)"
        variant="outlined"
        value={newProject?.actionItems.join(",") || ""}
        onChange={(e: any) =>
          setNewProject({
            ...newProject,
            actionItems: e.target.value.split(","),
          } as Project)
        }
        style={{ display: "block", marginBottom: "1rem" }}
      />

      {/* Date Started */}
      <TextField
        id="projectDateStarted"
        label="Date Started"
        variant="outlined"
        type="date"
        value={
          newProject?.DateStarted
            ? newProject.DateStarted.toISOString().split("T")[0]
            : ""
        }
        onChange={(e: any) =>
          setNewProject({
            ...newProject,
            DateStarted: new Date(e.target.value),
          } as Project)
        }
        style={{ display: "block", marginBottom: "1rem" }}
        InputLabelProps={{
          shrink: true, // so the label doesn’t overlap the date value
        }}
      />

      {/* Due Date */}
      <TextField
        id="projectDueDate"
        label="Due Date"
        variant="outlined"
        type="date"
        value={
          newProject?.DueDate
            ? newProject.DueDate.toISOString().split("T")[0]
            : ""
        }
        onChange={(e: any) =>
          setNewProject({
            ...newProject,
            DueDate: new Date(e.target.value),
          } as Project)
        }
        style={{ display: "block", marginBottom: "1rem" }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* Budget */}
      <TextField
        id="projectBudget"
        label="Budget"
        variant="outlined"
        type="number"
        value={newProject?.budget || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewProject({
            ...newProject,
            budget: parseFloat(e.target.value),
          } as Project)
        }
        style={{ display: "block", marginBottom: "1rem" }}
      />

      <Button variant="contained" color="secondary" onClick={addProject}>
        Add Project
      </Button>
    </div>
  );
};

export default MuiProjects;
