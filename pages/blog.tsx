import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("blog");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({
  posts,
}: {
  posts: [{ slug: string; frontmatter: { date: string; title: string } }];
}) {
  posts.sort((a, b) => a.frontmatter.date.localeCompare(b.frontmatter.date));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border-2 border-white m-2 rounded-lg flex flex-col hover:bg-red-700"
        >
          <Link href={`/blog/${slug}`}>
            <a>
              <h1 className="font-semibold p-2">{frontmatter.title}</h1>
            </a>
          </Link>
          <p className="p-2">Date: {frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
}
