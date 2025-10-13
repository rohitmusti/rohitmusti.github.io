import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

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
    <div className="py-8 md:py-12 animate-fade-in">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </a>
        </Link>
      </div>

      {/* Article Container */}
      <article className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-navy-700">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-400 to-terracotta-400 bg-clip-text text-transparent mb-4 leading-tight">
            {frontmatter.title}
          </h1>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className="text-terracotta-500">📅</span>
              <time>
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="blog-content">
          <ReactMarkdown
            components={{
              // Custom components for better styling
              code: ({ node, inline, className, children, ...props }: any) => {
                return inline ? (
                  <code {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="block" {...props}>
                    {children}
                  </code>
                );
              },
              a: ({ node, children, href, ...props }: any) => (
                <a
                  href={href}
                  className="text-gold-400 hover:text-gold-300 underline decoration-gold-500/50 hover:decoration-gold-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-navy-700">
          <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              See an error in this blog? Please reach out through my{" "}
              <Link href="/contact">
                <a className="text-gold-400 hover:text-gold-300 underline decoration-peacock-500/50 hover:decoration-peacock-400 transition-colors duration-200">
                  contact page
                </a>
              </Link>{" "}
              and I&apos;ll make a correction!
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/blog">
                <a className="btn-secondary inline-block">← More Posts</a>
              </Link>
              <Link href="/">
                <a className="btn-secondary inline-block">Home</a>
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
