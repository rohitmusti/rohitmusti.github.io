import type { NextPage } from "next";
import Image from "next/image";

const myLoader = ({ src }: { src: string }) => {
  return `/${src}`;
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="p-8 justify-end md:w-1/2">
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
          My name is Rohit and I am software and data engineer hoping to use my
          technical skills to improve the world! I work at{" "}
          <a
            href="https://americanforests.org/"
            target="_blank"
            className="underline"
          >
            American Forests
          </a>{" "}
          and bring projects like the{" "}
          <a
            href="https://treeequityscore.org"
            target="_blank"
            className="underline"
          >
            Tree Equity Score
          </a>{" "}
          to fruition. Next Spring (2022), I'll begin teching an undergraduate
          course on Cryptography through the{" "}
          <a
            href="https://www.techtalentpipeline.nyc/tech-in-residence-corps#:~:text=The%20Tech%2Din%2DResidence%20Corps,need%20to%20enter%20the%20workforce.&text=Tech%2Din%2DResidence%20Corps%20members,next%20generation%20of%20NYC%20students."
            target="_blank"
            className="underline"
          >
            Tech in Residence Corps
          </a>{" "}
          at CUNY.
        </p>
        <p>
          Outside of work, I enjoy learning the ins and outs of bike maintenance
          by volunteering at my local free bike clinic. I also rock climbing,
          tennis, and chess.
        </p>
      </div>
    </div>
  );
};

export default Home;
