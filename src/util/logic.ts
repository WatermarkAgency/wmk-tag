import slugify from "slugify";

/**
 * Helper function for slugify to get slug format
 */
export const slugifyTitle = (title: string) =>
  slugify(title, { lower: true, strict: true });
