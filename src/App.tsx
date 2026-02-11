// import sections
import Header from './sections/Header';
import Profile from './sections/Profile';
import Skills from './sections/Skills';
import Contacts from './sections/Contacts';
import Directories from './sections/Directories';
import Projects from './sections/Projects';

// import components
import CustomFooter from './components/CustomFooter';

// import types
import type { ResumeType } from './types/resume';
import type { ProjectsType } from './types/projects';

// import json data
import resumeJson from './data/resume.json';
import projectsJson from './data/projects.json';

// import styling
import './App.css'

const resumeData: ResumeType = resumeJson;
const projectsData: ProjectsType = projectsJson;

function App() {
  return (
    <div>
      {
        resumeData && (
          <>
            <Header aboutMeData={resumeData.about_me} />
            <Directories />
            <Profile 
              aboutMeData={resumeData.about_me}
              certificationsData={resumeData.certifications}
              experiencesData={resumeData.experiences}
            />
            <Contacts data={resumeData.contacts} />
            <Skills data={resumeData.skills} />
            <Projects projects={projectsData.projects} />
          </>
        )
      }
      <CustomFooter />
    </div>
  )
}

export default App;
