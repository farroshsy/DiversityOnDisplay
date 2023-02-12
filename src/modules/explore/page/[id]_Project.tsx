/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import axios from 'axios';

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

interface ProjectsResponse {
  message: string;
  data: Project[];
}

const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Link key={project.id} href="/projects/[id]" as={`/projects/${project.id}`}>
          <div className="card">
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <p>{project.region_id}</p>
            <p>{project.creator_name}</p>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <p>$ {project.funding_goal}</p>
          </div>
        </Link>
      ))}

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 16px;
        }

        .card {
          background-color: black;
          border-radius: 4px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          padding: 16px;
          text-align: center;
        }

        h3 {
          margin-bottom: 20px;
        }

        p {
          margin: 0;
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
};

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    axios
      .get<ProjectsResponse>('https://hackathon-wehack-23.herokuapp.com/api/v1/projects/view/?region_code=AL')
      .then((response) => {
        setProjects(response.data.data);
      });
  }, []);

  return <ProjectList projects={projects} />;
};

export default Projects;