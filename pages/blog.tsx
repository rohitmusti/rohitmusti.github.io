import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const files = fs.readdirSync("blog");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    // Get a brief excerpt (first 150 characters)
    const excerpt = content.replace(/^#.*$/gm, "").trim().substring(0, 150);

    return {
      slug,
      frontmatter,
      excerpt,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

interface Post {
  slug: string;
  frontmatter: {
    date: string;
    title: string;
  };
  excerpt: string;
}

export default function Blog({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState<number>(0);

  posts.sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedPost((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedPost((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        router.push(`/blog/${posts[selectedPost].slug}`);
      } else if (e.key === "h" || e.key === "Escape") {
        e.preventDefault();
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPost, posts, router]);

  return (
    <div className="py-4 font-mono">
      {/* Terminal Window */}
      <div className="bg-navy-900 border-2 border-navy-700 rounded-lg overflow-hidden shadow-2xl shadow-navy-950/50">
        {/* Terminal Header */}
        <div className="bg-navy-800 px-4 py-2 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rust-500"></div>
              <div className="w-3 h-3 rounded-full bg-gold-500"></div>
              <div className="w-3 h-3 rounded-full bg-olive-500"></div>
            </div>
            <span className="text-slate-400 text-sm ml-2">rohit@musti: ~/blog</span>
          </div>
          <Link href="/">
            <a className="text-xs text-slate-500 hover:text-gold-400 transition-colors">
              [press h or ESC to return home]
            </a>
          </Link>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 text-sm leading-relaxed">
          {/* Command */}
          <div>
            <div className="flex items-start">
              <span className="text-terracotta-500">$</span>
              <span className="ml-2 text-slate-300">ls -la ~/blog/posts</span>
            </div>
            <div className="mt-2 pl-4 text-slate-400 text-xs">
              total {posts.length} posts
            </div>
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Blog Posts List */}
          <div className="space-y-1">
            {posts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <a
                  onMouseEnter={() => setSelectedPost(index)}
                  className={`block px-3 py-3 rounded transition-all ${
                    selectedPost === index
                      ? "bg-navy-800 border-l-4 border-gold-500"
                      : "border-l-4 border-transparent hover:bg-navy-800/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs mt-1 ${selectedPost === index ? "text-gold-400" : "text-slate-500"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className={`font-semibold mb-1 ${selectedPost === index ? "text-gold-400" : "text-slate-300"}`}>
                        {post.frontmatter.title}
                      </div>
                      <div className="text-xs text-slate-500 mb-1">
                        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-2">
                        {post.excerpt}...
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Command Prompt */}
          <div className="flex items-start">
            <span className="text-gold-400">rohit@musti</span>
            <span className="text-slate-500">:</span>
            <span className="text-terracotta-400">~/blog</span>
            <span className="text-slate-500">$</span>
            <span className="ml-2 text-slate-400 animate-pulse">▊</span>
          </div>

          {/* Help Text */}
          <div className="pt-2 text-xs text-slate-500 border-t border-navy-700">
            <div>💡 Navigation: ↑↓ to select | Enter to read | h/ESC to go home</div>
          </div>
        </div>
      </div>
    </div>
  );
}
