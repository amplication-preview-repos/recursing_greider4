import { SocialMedia as TSocialMedia } from "../api/socialMedia/SocialMedia";

export const SOCIALMEDIA_TITLE_FIELD = "id";

export const SocialMediaTitle = (record: TSocialMedia): string => {
  return record.id?.toString() || String(record.id);
};
