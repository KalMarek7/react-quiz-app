const About = () => {
  return (
    <main className="aboutContainer">
      <section className="aboutContent">
        <p>
          Welcome to my first React project, where I've applied some fundamental
          React concepts:
        </p>
        <ul>
          <li>
            <b>useState Hook:</b> I've used this to manage questions, answers,
            selected values, and the score.
          </li>
          <li>
            <b>useEffect Hook:</b> To fetch data on component mount and reset of
            the score.
          </li>
          <li>
            <b>React Router:</b> This is used to enable client-side routing for
            smoother navigation.
          </li>
          <li>
            <b>Custom useWindowSize Hook:</b> This allowed me to conditionally
            render content based on the size of the browser window.
          </li>
        </ul>
        <p>
          I sourced the initial data from{" "}
          <a
            href="https://gist.github.com/cmota/f7919cd962a061126effb2d7118bec72"
            target="_blank"
          >
            questions.json
          </a>{" "}
          and created a Python script to preprocess it for the app's
          requirements. During this process, I discovered and implemented a
          shuffle algorithm to randomize array items. Additionally, I learned
          about JavaScript's Set data structure, which proved valuable for
          maintaining unique IDs.
        </p>
      </section>
    </main>
  );
};

export default About;
