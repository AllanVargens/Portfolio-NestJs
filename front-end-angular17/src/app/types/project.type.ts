type Section = {
  imageURL: string;
  description: string;
};

export type Project = {
  project_id: string;
  title: string;
  project_url: string;
  github_project: string;
  youtube_video: string;
  description: string;
  tags_back: string[];
  backend_about: string;
  tags_front: string[];
  frontend_about: string;
  sections: Section[];
};
