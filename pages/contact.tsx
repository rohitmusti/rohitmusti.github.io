import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="p-8 text-lg md:w-1/2 justify-center">
      <p>You can reach me on</p>
      <ul className="list-inside list-disc">
        <li>
          <a
            href="https://linkedin.com/in/rohitmusti/"
            target="_blank"
            className="underline"
          >
            Linked In
          </a>{" "}
          for my professional history.
        </li>
        <li>
          <a
            href="https://github.com/rohitmusti"
            target="_blank"
            className="underline"
          >
            Github
          </a>{" "}
          for my code!
        </li>
      </ul>
    </div>
  );
};

export default Contact;
