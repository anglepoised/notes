import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../../consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = (await getCollection("articles")).slice(0, 30);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: articles.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/articles/${post.slug}/`,
    })),
  });
}
