import type { ProjectType } from '../types/projects';

type Props = {
  projects: ProjectType[];
}

function Projects({projects}: Props) {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      {
        projects && projects.map((project) => (
          <div key={project.name}>
            <h2>
              {project.name}
              { project.github_link && 
                <a href={project.github_link} target="_blank">
                  <img 
                    src="/icons/placeholder.png" 
                    alt="GitHub"
                    title="Link to GitHub"
                    width="50" height="50"
                  />
                </a>
              }
              { project.published_link && 
                <a href={project.published_link} target="_blank">
                  <img 
                    src="/icons/placeholder.png" 
                    alt="View Project"
                    title="Link to View Project"
                    width="50" height="50"
                  />
                </a>
              }
            </h2>
            {project.technical_desc.map((item) => (
              <img 
                src={"/icons/"+item.icon}
                alt={item.name}
                title={item.name}
                width="50" height="50"
              />
            ))} <br />
            {project.description} <br />
          </div>
        ))
      }
    </div>
  )
}

export default Projects;