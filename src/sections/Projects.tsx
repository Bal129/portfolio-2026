import type { ProjectType } from '../types/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

type Props = {
  projects: ProjectType[];
}

function Projects({projects}: Props) {
  return (
    <div id="projects" className="projects-section">
      <h1 className="section-header">My Projects</h1>
      {
        projects && projects.map((project) => (
          <div key={project.name} className="projects-container">
            <div>
              <img 
                src={"/thumbnails/"+project.thumbnail}
                alt="Project Thumbnail"
                title={project.name}
                className="projects-thumbnail"
              />
            </div>
            <div className="projects-details">
              <h2 className="projects-header">
                {project.name}
                { project.github_link && 
                  <a href={project.github_link} target="_blank" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                }
                { project.published_link && 
                  <a href={project.published_link} target="_blank" title="Published Page">
                    <FontAwesomeIcon icon={faWindowMaximize} />
                  </a>
                }
              </h2>
              <div>{project.description}</div>
              <div>
                {project.technical_desc.map((item) => (
                  <img 
                    key={item.name}
                    src={"/icons/"+item.icon}
                    alt={item.name}
                    title={item.name}
                    width="50" height="50"
                    className="projects-technical-desc-item"
                  />
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Projects;