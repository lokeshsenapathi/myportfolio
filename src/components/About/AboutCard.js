import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          "Hello, <span className="red"> I'm Lokesh Senapathi </span>
             
            <br />. A passionate and versatile individual with a strong background in full-stack development. With a deep curiosity for technology and a drive for innovation, I have honed my skills in creating captivating user interfaces and implementing robust server-side functionality. I specialize in areas such as machine learning, particularly in natural language processing, computer vision, and predictive modeling. With a dedication to continuous learning and a passion for pushing the boundaries of what's possible, I am excited to embark on new challenges and make a meaningful impact in the world of technology."
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">lokesh senapathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
