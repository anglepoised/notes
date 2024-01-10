import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../config";
const postImportResult = import.meta.glob("../notes/**/*.mdx", {
  eager: true,
});

// Convert imported results to an array and sort by date
const posts = Object.values(postImportResult)
  .sort((a, b) => {
    const dateA = new Date(a.frontmatter.datePublished);
    const dateB = new Date(b.frontmatter.datePublished);
    return dateB - dateA; // Sort in descending order
  })
  .slice(0, 30); // Get only the top 30 recent posts

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.datePublished,
    })),
  });
