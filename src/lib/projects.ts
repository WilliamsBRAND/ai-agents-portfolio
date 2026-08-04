import data from "./projects-data.json";

export interface ImplementationStep {
  title: string;
  detail: string;
}

export interface Impact {
  headline: string;
  metrics: { label: string; value: string; description?: string }[];
  benefits: string[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  brief: string[];
  implementation: ImplementationStep[];
  before: string[];
  after: string[];
  whyThisApproach: string[];
  impact: Impact;
  tools: string[];
  keyFeatures: string[];
  videoUrl?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  stats: { label: string; value: string }[];
  techStack: string[];
}

export const profile: Profile = data.profile;
export const projects: Project[] = data.projects;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|live\/|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

export function getLoomVideoId(url: string): string | null {
  const match = url.match(/loom\.com\/share\/([\w-]+)/);
  return match ? match[1] : null;
}

export interface VideoEmbed {
  provider: "youtube" | "loom";
  id: string;
}

export function getVideoEmbed(url: string): VideoEmbed | null {
  const loomId = getLoomVideoId(url);
  if (loomId) return { provider: "loom", id: loomId };
  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) return { provider: "youtube", id: youtubeId };
  return null;
}
