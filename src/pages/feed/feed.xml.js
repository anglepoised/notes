import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../consts";
import { getCollection } from "astro:content";

// Fetch all collections
const allArticles = await getCollection("articles");
const allImages = await getCollection("images");
const allLinks = await getCollection("links");
const allNotes = await getCollection("notes");
const allQuotes = await getCollection("quotes");
const allVideos = await getCollection("videos");

// Combine collections
const combinedContent = [
  ...allArticles,
  ...allImages,
  ...allLinks,
  ...allNotes,
  ...allQuotes,
  ...allVideos,
];

// Convert imported results to an array and sort by date
combinedContent
  .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
  .slice(0, 30); // Get only the top 30 recent posts

export const GET = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: combinedContent.map((post) => ({
      link: `/${post.collection}/${post.slug}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
    })),
  });
