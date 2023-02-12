/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://hackathon-wehack-23.herokuapp.com/api/v1/projects/view/?region_code=AL';

interface Project {
  id: number;
  title: string;
  category: string;
  region_id: string;
  region_code: string;
  creator_name: string;
  description: string;
  image: string;
  funding_goal: number;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(API_URL);
        setProjects(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  interface ProjectsData {
  message: string;
  data: Project[];
}

  return (
    <div className="container">
      <h1>Projects</h1>
      {loading && <p>Loading...</p>}
      {projects.map(project => (
        <div className="card" key={projects.data.id}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>Category: {project.category}</p>
          <p>Region: {project.region_id}</p>
          <p>Creator: {project.creator_name}</p>
          <p>Description: {project.description}</p>
          <p>Funding Goal: {project.funding_goal}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;