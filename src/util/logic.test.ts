import slugify from "slugify";
import { slugifyTitle } from "./logic";

const tagArray = [
  "influencer marketing",
  "influencer marketing strategy",
  " ROI of influencer marketing",
];

test("slugifyTitle output matches configured slugify output", () => {
  const slugified = tagArray.map((t) =>
    slugify(t, { lower: true, strict: true })
  );
  tagArray.forEach((tag, i) => {
    expect(slugifyTitle(tag)).toEqual(slugified[i]);
  });
});
