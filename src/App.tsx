import Header from './sections/Header';
import Profile from './sections/Profile';
import Skills from './sections/Skills';
import Contacts from './sections/Contacts';
import type { ResumeType } from './types/types';
import resumeJson from './data/resume.json';
import './App.css'

const resumeData: ResumeType = resumeJson;

function App() {
  return (
    <div>
      {
        resumeData && (
          <>
            <Header aboutMeData={resumeData.about_me} />
            <Profile 
              educationData={resumeData.education}
              certificationsData={resumeData.certifications}
              experiencesData={resumeData.experiences}
            />
            <Skills data={resumeData.skills} />
            <Contacts data={resumeData.contacts} />
          </>
        )
      }
    </div>
  )
}

export default App;
