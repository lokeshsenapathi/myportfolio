import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpg";
import wiki from "../../Assets/Projects/wikilogo.png";
import oct from "../../Assets/Projects/oct.avif";
import google from "../../Assets/Projects/google.jpg";

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
              imgPath={todo}
              isBlog={false}
              title="Todos"
              description="Our Todos app is a versatile and user-friendly task management tool designed to help you stay organized and increase your productivity. With a clean and intuitive interface, you can easily create, track, and manage all your tasks and to-do lists in one place. ."
              ghLink="https://github.com/lokeshsenapathi/todoList"
              demoLink="https://todos.ccbp.tech/"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiki}
              isBlog={false}
              title="wikipidia search"
              description="With the Simple Wikipedia Search application, you can enter a search query or a specific topic you're interested in learning about. The application will then retrieve relevant articles from the Simple English Wikipedia database and display them in a clear and concise format."
              ghLink="https://github.com/lokeshsenapathi/"
              demoLink="https://lokeshsena.ccbp.tech/"
            />
          </Col>

             <Col md={4} className="project-card">
             <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Stock market prediction"
              description="Our Google Stock Market Prediction project provides users with interactive visualizations, real-time market data updates, and personalized recommendations based on their investment preferences. It serves as a powerful tool for investors, financial analysts, and traders."
              ghLink="https://github.com/lokeshsenapathi/googlestock-market-prediction-"
              
            />
            
          </Col>
                 <Col md={4} className="project-card">
             <ProjectCard
              imgPath={oct}
              isBlog={false}
              title="Detecting retinal diseases through Optical Coherence Tomography (OCT) images using Deep Neural Networks"
              description="OCTstands for Optical Coherence Tomography. It is a non-invasive imaging technique used in medical diagnostics to produce high-resolution cross-sectional images of biological tissues. In OCT imaging, low-coherence light is directed onto the tissue, and the reflected light is analyzed to construct detailed images of the internal structure of the tissue. This technique is widely used in ophthalmology for imaging the retina and diagnosing various eye conditions, including macular degeneration, diabetic retinopathy, and glaucoma."
              ghLink="https://github.com/lokeshsenapathi/project-leo/tree/master"
              demoLink="https://mtech-pro-gen-ai-oct.streamlit.app/"
              
            />
            
          </Col>
                

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
