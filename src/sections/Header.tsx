import type { AboutMeType } from '../types/resume';

type Props = {
  aboutMeData: AboutMeType;
}

function Header({aboutMeData}: Props) {
  return (
    <div>
      <h1>Header</h1>

      <h2>{aboutMeData.name}</h2> <br />
      {aboutMeData.description} <br />
    </div>
  )
}

export default Header;
