import { slugifyTitle } from "..";

/**
 * @function
 * makes contentful data consistent with the shape of WP/Json data
 */
const reshapeCtflTag = (tag: string) => {
  return (
    tag &&
    typeof tag === "string" && { name: tag.trim(), slug: slugifyTitle(tag) }
  );
};

/**
 * @class
 * Use to represent content model taxonomy items
 * */
export class Tag {
  name: string;
  slug: string;
  constructor(node: string | { name: string; slug: string }) {
    const fromString = typeof node === "string" ? reshapeCtflTag(node) : null;
    this.name = fromString ? fromString.name : node.name;
    this.slug = fromString ? fromString.slug : node.slug;
  }
}
