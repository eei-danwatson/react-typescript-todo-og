import React, { FC, useState, useEffect, useMemo, useCallback } from "react";
import { Project } from "./Types";

const emptyProject: Project = {
    title: "",
    description: "",
    actionItems: [],
    DateStarted: new Date(),
    DueDate: new Date(),
    budget: 0,
    contributors: [],
};

const Projects: FC = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>(emptyProject);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const addProject = useCallback(() => {
    setProjects(prevProjects => [...prevProjects, newProject]);
    setNewProject(emptyProject);
  }, [newProject, emptyProject]);

  useEffect(() => {
    // If any field differs from emptyProject, mark as dirty.
    const dirty = newProject.title !== emptyProject.title ||
                  newProject.description !== emptyProject.description ||
                  newProject.actionItems.length > 0 ||
                  // ...other fields comparisons if needed.
                  false;
    setIsDirty(dirty);
  }, [newProject]);

  const totalBudget = useMemo(() => {
    return projects.reduce((sum, project) => sum + project.budget, 0);
  }, [projects]);

    return (
        <>
    <button onClick={addProject}>Add Project</button>
        <div>
            <h2>Add a Project</h2>
            {isDirty && <div>You have unsaved data.</div>}
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
        <div>Total Budget: {totalBudget}</div>
      </>
    )
}

export default Projects