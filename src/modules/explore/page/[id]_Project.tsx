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
    <>
      {projects.map((project) => (
        <Link key={project.id} href="/projects/[id]" as={`/projects/${project.id}`}>
          <div className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
    </>
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