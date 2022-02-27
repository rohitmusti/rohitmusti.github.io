import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const files = fs.readdirSync("blog");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: any };
}) {
  const fileName = fs.readFileSync(`blog/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({
  frontmatter,
  content,
}: {
  frontmatter: { title: string; date: any };
  content: any;
}) {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-2xl py-4">
      <h1>{frontmatter.title}</h1>
      <p>Date Created: {frontmatter.date}</p>
      <div className="">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <hr />
      <p>
        See an error in this blog? Please reach out through my contact page and
        I will make a correction!
      </p>
    </div>
  );
}
