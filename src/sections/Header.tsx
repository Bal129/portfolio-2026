import type { AboutMeType } from '../types/resume';

type Props = {
  aboutMeData: AboutMeType;
}

function Header({aboutMeData}: Props) {
  return (
    <div id="header">
      <h1>{aboutMeData.name}</h1>
    </div>
  )
}

export default Header;
