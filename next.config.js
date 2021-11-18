/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ["tsx"],
  images: {
    loader: "imgix",
    path: "/",
  },
};
