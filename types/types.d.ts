interface SocialMediaProps {
  social: SocialMediaItemProps[];
}

interface SocialMediaItemProps {
  url: string;
  name: string;
}

interface ExperienceItemsProps {
  experience: ExperienceItemProps[];
}

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  technologies: string[];
}

export {
  ExperienceItemProps,
  ExperienceItemsProps,
  SocialMediaItemProps,
  SocialMediaProps,
};
