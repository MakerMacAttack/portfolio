import React from "react";
import "./CompSci.css";

export default function CompSci(props) {
  return (
    <div>
      <h1 class-name="screen-title">Core Strength</h1>
      <p className="body-text">
        My graduate studies in Computer Science provide the solid foundation I
        draw on to plan and execute reliable code.
      </p>
      <p className="body-text">
        My first class had a few video project requirements which I'm providing
        here.
      </p>
      <p className="body-text">
        They represent my understanding of the basics that underly all
        programming languages, with a touch of personality.
      </p>
      <div id="tubes">
        <div>
          <h3 className="sub-title">Binary Multiplication</h3>
          <iframe
            className="vid"
            title="bit"
            src="https://www.youtube-nocookie.com/embed/aa1q5-OgPOA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3 className="sub-title">Regular Expressions/DFA</h3>
          <iframe
            className="vid"
            title="winner"
            src="https://www.youtube-nocookie.com/embed/KTVhDMxr8rY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3 className="sub-title">Proof by Induction</h3>
          <iframe
            className="vid"
            title="binargraphy"
            src="https://www.youtube-nocookie.com/embed/r2WcViAAOuU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3 className="sub-title">Prime Factorization</h3>
          <iframe
            className="vid"
            title="warehouse"
            src="https://www.youtube-nocookie.com/embed/FAGTqKqIaIc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
