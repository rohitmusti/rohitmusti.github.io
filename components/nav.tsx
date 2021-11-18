type linkType = { url: string; text: string };
import Link from "next/link";

export default function Nav() {
  const navLinks = [
    { text: "About", url: "/" },
    { text: "Projects", url: "/projects" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <div className="border-gray-200 border-b-2 drop-shadow-lg pt-3 sm:pb-8 w-full justify-between flex flex-row pr-3 h-10">
      {" "}
      <div className="flex justify-beginning">
        <h1 className="text-red-400 font-bold text-md sm:text-xl pl-3">
          <Link href="/">Rohit Musti</Link>
        </h1>
      </div>
      <div className="flex justify-end">
        {navLinks.map((navLink: linkType, i: number) => {
          return (
            <Link href={navLink.url} key={i}>
              <button className="font-bold hover:underline text-md sm:text-xl text-red-400 px-1">
                {navLink.text}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
