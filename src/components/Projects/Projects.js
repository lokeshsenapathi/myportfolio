import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Todos"
              description="Our Todos app is a versatile and user-friendly task management tool designed to help you stay organized and increase your productivity. With a clean and intuitive interface, you can easily create, track, and manage all your tasks and to-do lists in one place. ."
              ghLink="https://github.com/lokeshsenapathi/todoList"
              demoLink="https://todos.ccbp.tech/"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="wikipidia search"
              description="With the Simple Wikipedia Search application, you can enter a search query or a specific topic you're interested in learning about. The application will then retrieve relevant articles from the Simple English Wikipedia database and display them in a clear and concise format."
              ghLink="https://github.com/lokeshsenapathi/"
              demoLink="https://lokeshsena.ccbp.tech/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
