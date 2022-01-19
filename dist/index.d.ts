/**
 * @class
 * Use to represent content model taxonomy items
 * */
declare class Tag {
    name: string;
    slug: string;
    constructor(node: string | {
        name: string;
        slug: string;
    });
}

/**
 * Helper function for slugify to get slug format
 */
declare const slugifyTitle: (title: string) => string;

export { Tag, slugifyTitle };
