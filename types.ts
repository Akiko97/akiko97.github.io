

export interface NavContent {
  home: string;
  about: string;
  projects: string;
  gallery: string;
  contact: string;
}

export interface HomeContent {
  welcome: string;
  subtitle: string;
  quote: string;
  // image removed as it moved to gallery
}

export interface KeyValueItem {
  title: string;
  content: string;
}

export interface BasicInfo {
  title: string;
  name: KeyValueItem;
  hometown: KeyValueItem;
  previous_residence: KeyValueItem;
  current_residence: KeyValueItem;
  specialization: KeyValueItem;
  language: KeyValueItem;
  github: string;
}

export interface EducationItem {
  degree: KeyValueItem;
  dates: string;
  university: KeyValueItem;
  faculty: KeyValueItem;
  department: KeyValueItem;
  major: KeyValueItem;
  laboratory: KeyValueItem;
  focus: KeyValueItem;
}

export interface Education {
  title: string;
  items: EducationItem[];
}

export interface ExperienceItem {
  job_title: string;
  company: string;
  location: string;
  dates: string;
  infos: string[];
}

export interface Experience {
  title: string;
  items: ExperienceItem[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Skills {
  title: string;
  items: SkillGroup[];
}

export interface Hobbies {
  title: string;
  content: string;
}

export interface AboutContent {
  title: string;
  basic: BasicInfo;
  education: Education;
  experience: Experience;
  skills: Skills;
  hobbies: Hobbies;
}

export interface ProjectItem {
  title: string;
  description: string;
  language?: string;
  link: string;
}

export interface ResearchProjects {
  title: string;
  items: ProjectItem[];
}

export interface PersonalProjects {
  title: string;
  items: ProjectItem[];
}

export interface ProjectsContent {
  title: string;
  viewMore: string;
  research: ResearchProjects;
  personal: PersonalProjects;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryContent {
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  telegram: string;
  discord: string;
  discordLink: string;
  github: string;
  githubLink: string;
  email_intro: string;
}

export interface TranslationData {
  nav: NavContent;
  home: HomeContent;
  about: AboutContent;
  projects: ProjectsContent;
  gallery: GalleryContent;
  contact: ContactContent;
}

export type Language = 'en' | 'ja' | 'zh';