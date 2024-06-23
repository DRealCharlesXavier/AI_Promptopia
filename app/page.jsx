import Feed from "../components/Feed";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          Xavier's AI-Powered Prompts{" "}
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts. Brought to you by <br />
        <span className="blue_gradient"> JS MASTERY</span>
      </p>

      <Feed />
    </section>
  );
};

export default page;
