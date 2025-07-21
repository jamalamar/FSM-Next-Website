export const media = {
  images: {
    logo: "/assets/images/logo.png",
    heroBackground: "/assets/images/hero-bg.jpg",
    aboutUs: "/assets/images/about-us.jpg",
    team: "/assets/images/team.jpg",
    placeholder: "/assets/images/placeholder.png",
  },
  videos: {
    intro: "/assets/videos/intro.mp4",
    showcase: "/assets/videos/showcase.mp4",
  },
  documents: {
    brochure: "/assets/documents/brochure.pdf",
    terms: "/assets/documents/terms.pdf",
    privacy: "/assets/documents/privacy.pdf",
  },
  audio: {
    backgroundMusic: "/assets/audio/background.mp3",
    notification: "/assets/audio/notification.mp3",
  },
  external: {
    youtube: "https://youtube.com/@yourchannel",
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    linkedin: "https://linkedin.com/company/yourcompany",
  },
} as const;

export type MediaType = typeof media;
export type ImageKeys = keyof typeof media.images;
export type VideoKeys = keyof typeof media.videos;
export type DocumentKeys = keyof typeof media.documents;
export type AudioKeys = keyof typeof media.audio;
export type ExternalKeys = keyof typeof media.external;