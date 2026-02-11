import type { AboutMeType } from '../types/resume';

type Props = {
  aboutMeData: AboutMeType;
}

function Projects({aboutMeData}: Props) {
  return (
    <div>
      <h2>My Projects</h2>
    </div>
  )
}

export default Projects;