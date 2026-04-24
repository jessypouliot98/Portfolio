import type { BulletList } from "../components/BulletList";

export type DetailsText = BulletList.Content;

export type ContactType = "email" | "phone" | "linkedin" | "github" | "website";

export type Contact = {
  type: ContactType;
  label: string;
  url: string;
}

export type Language = {
  label: string;
  capacity: string;
}

export type TechnologyType = "frontend" | "backend" | "tools" | "other";

export type Technology = {
  type: TechnologyType;
  label: string;
}

export type Education = {
  school: string;
  certification: string;
  completedOn: string;
  content: DetailsText;
}

export type Strength = {
  title: string;
  description: string;
}

export type LocationType = "remote" | "hybrid" | "on-site";
export type PositionType = "full-time" | "contract";

export type Experience = {
  title: string;
  stack: string[];
  company: string;
  location: string;
  locationType: LocationType;
  from: string;
  to: string;
  positionType: PositionType;
  content: DetailsText;
}

export type Translation = {
  fileName: string;
  fileName_react: string;
  title: string;
  subtitle: string;
  subtitle_react: string;
  presentation: string;
  presentation_react: string;
  contact: {
    items: Contact[];
    type: Record<ContactType, string>;
  };
  languages: {
    title: string;
    items: Language[];
  };
  technologies: {
    title: string;
    items: Technology[];
  };
  education: {
    title: string;
    items: Education[]
  };
  strengths: {
    title: string;
    items: Strength[];
  };
  experience: {
    title: string;
    items: Experience[];
  }
}