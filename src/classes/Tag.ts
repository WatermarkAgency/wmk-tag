import { slugifyTitle } from "../util/logic";

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
    if (typeof node === "string") {
      const t = reshapeCtflTag(node);
      this.name = t.name;
      this.slug = t.slug;
    } else {
      this.name = node.name;
      this.slug = node.slug;
    }
  }
}
