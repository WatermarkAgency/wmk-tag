import { Tag } from "./Tag";
import slugify from "slugify";

const tagArray = [
  "influencer marketing",
  "influencer marketing strategy",
  " ROI of influencer marketing",
];

const tags = tagArray.map((t) => new Tag(t));

test("Converts array of strings to Tag class", () => {
  tags.forEach((t) => {
    expect(t).toBeInstanceOf(Tag);
  });
});

test("Tag name matches string in array", () => {
  tagArray.forEach((t, i) => {
    const regex = new RegExp(tags[i].name);
    expect(true).toEqual(Array.isArray(t.match(regex)));
  });
});

test("Tag slug matches slugify output", () => {
  tags.forEach((t, i) => {
    expect(t.slug).toEqual(slugify(tagArray[i], { lower: true, strict: true }));
  });
});
