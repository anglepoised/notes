import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../consts";
const postImportResult = import.meta.glob("../old/**/*.mdx", {
  eager: true,
});

// Convert imported results to an array and sort by date
const posts = Object.values(postImportResult)
  .sort((a, b) => {
    const dateA = new Date(a.frontmatter.pubDate);
    const dateB = new Date(b.frontmatter.pubDate);
    return dateB - dateA; // Sort in descending order
  })
  .slice(0, 30); // Get only the top 30 recent posts

export const GET = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
    })),
  });
