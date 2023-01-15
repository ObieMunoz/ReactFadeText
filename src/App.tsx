import FadingText from "./FadingText";

function App() {
  const text: string =
    "Object-oriented programming, functional programming, data structures, algorithms, design patterns, machine learning, artificial intelligence, cloud computing, devops, software testing, agile methodologies, software architecture, code refactoring, whatever it takes to build efficient and scalable software.";

  return (
    <div className="app">
      <div className="spacer">
        <h1 style={{ position: "sticky", top: 0 }}>
          Please scroll down. View this code at:{" "}
          <a
            href="https://www.github.com/obiemunoz/ReactFadeText"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
      </div>
      <FadingText text={text} />
      <div className="spacer"></div>
    </div>
  );
}

export default App;
