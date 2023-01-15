import FadingText from "./FadingText";

function App() {
  const text: string =
    "Packaging, websites, microsites, fulfillment integration, brand, catalogs, shipping boxes, direct mail, email campaigns, copywriting, photoshoots, art direction, delivery truck design, whatever it takes to help the Cowgirls sell their cheese.";

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
