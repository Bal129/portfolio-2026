export type ResumeType = {
  resume_link: string,
  portfolio_link: string,
  about_me: AboutMeType,
  skills: SkillsType[],
  contacts: ContactsType[],
  education: EducationType,
  experiences: ExperiencesType[],
  certifications: CertificationsType[]
}

export type AboutMeType = {
  name: string,
  description: string
}

export type SkillsType = {
  type: string,
  icon: string,
  items: SkillItemType[]
}

export type SkillItemType = {
  name: string,
  icon: string
}

export type ContactsType = {
  type: string,
  username: string,
  icon: string,
  url: string
}


export type EducationType = {
  institution: string,
  courses: string[],
  date_start: string,
  date_end: string
}

export type ExperiencesType = {
  role: string,
  type: string,
  company: string,
  date_start: string,
  date_end: string,
  description: string
}

export type CertificationsType = {
  name: string,
  icon: string,
  date: string,
  credential_url: string
}

export type ProjectsType = {
  version: string;
  projects: ProjectType[];
};

export type ProjectType = {
  name: string;
  github_link: string | null;
  published_link: string | null;
  technical_desc: TechnicalDescType[];
  description: string;
  thumbnail: string;
};

export type TechnicalDescType = {
  name: string;
  icon: string;
};