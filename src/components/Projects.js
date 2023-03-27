import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.gif";
import projImg2 from "../assets/img/project2.gif";
import projImg3 from "../assets/img/project3.gif";
import projImg4 from "../assets/img/project4.gif";
import projImg5 from "../assets/img/project5.gif";
import projImg6 from "../assets/img/project6.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "EXPENSE-TRACKER-MERN-APP",
      description: "Manage Income & Expense",
      imgUrl: projImg1,
      href: "https://github.com/Shivangi708/Expense-tracker-mern",
    },
    {
      title: "ChatGpt-Clone-MERN",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Personal-portfolio-html/css",
      description: "Design & Development of personal portfolio using html css & js.",
      imgUrl: projImg3,
    },
    {
      title: "Online-Quiz-Website",
      description: "Play Quiz on differen categories and levels.",
      imgUrl: projImg4,
    },
    {
      title: "Fun-Zone-Website",
      description: "Play different kind of games like ludo,tic-tac-toe etc.",
      imgUrl: projImg5,
    },
    {
      title: "Drum-Kit",
      description: "Design & Development of drum kit website.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>“First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.” </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third">
                      <p>“To accomplish great things, we must not only act, but also dream; not only plan, but also believe.”...These are the some of my projects ..More projects are coming on the way soon !!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}