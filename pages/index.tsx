import type { NextPage } from "next";
import Image from "next/image";

const myLoader = ({ src }: { src: string }) => {
  return `/${src}`;
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between justify-items-center">
      <div className="p-8 justify-center md:w-1/2">
        <Image
          loader={myLoader}
          src="climbing.png"
          alt="Picture of Rohit"
          width={100 * 4}
          height={100 * 4}
          className="border-8 border-red rounded-full"
        ></Image>
      </div>
      <div className="p-8 text-lg md:w-1/2 justify-center">
        <h1>Hi!</h1>
        <br />
        <p className="">
          My name is Rohit and I am software and data engineer! I work at{" "}
          <a
            href="https://read.ai/"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Read AI
          </a>
          {", "}
          working to create meeting tools for the 21st century. Outside of work,
          I enjoy tinkering and riding bikes, climbing (mostly falling off of)
          rocks, playing tennis, and enjoy chess!
        </p>
      </div>
    </div>
  );
};

export default Home;
