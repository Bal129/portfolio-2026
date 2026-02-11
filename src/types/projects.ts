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