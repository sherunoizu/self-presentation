/// <reference types="vite/client" />

interface NavLinkItemProps {
  href: string;
  sectionName?: string;
  IconComponent: IconType;
}

interface WorkItemProps {
  year: number;
  title: string;
  duration: string;
  details: string;
}

interface OffersItemProps {
  img: string;
  title: string;
}
