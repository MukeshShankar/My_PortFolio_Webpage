import React from "react";
import Container from 'react-bootstrap/Container';
import './Portfolio.css'
import Image from 'react-bootstrap/Image';

export default function Skills (){

    return(
        <body className="skill">
            <Container fluid className="d-flex flex-column justify-content-center align-items-center content m-0 p-0">
                <h1 className="skill1">Skills</h1>
                <h3 className="skill2">Web Developer Skills</h3>
                <div className="Skillimg">
                    <Image src={require("./Assets/html.png")} alt="Html" fluid/>
                    <Image src={require("./Assets/CSS.png")} alt="CSS" fluid />
                    <Image src={require("./Assets/bootstrap.png")} alt="Bootstrap" fluid />
                    <Image src={require("./Assets/Tailwind-css.webp")} alt="Tailwind" fluid />
                    <Image src={require("./Assets/Javascript.png")} alt="Javascript" fluid />
                    <Image src={require("./Assets/React.webp")} alt="React" fluid />
                </div>

                <h3 className="skill3">Soft Skills</h3>

                    <div className="d-flex SoftSkil">
                        <div>Harnessing</div>
                        <div>THT Components</div>
                        <div>Time Management</div>
                        <div>Network Cable</div>
                        <div>Quality inspection</div>
                    </div>
                    <div className="d-flex SoftSkil">
                        <div>MS Office</div>
                        <div>Problem Solving</div>
                        <div>Trouble Shooting</div>
                        <div>Team Work</div>
                        <div>Confidence</div>
                    </div>
                    <div className="d-flex SoftSkil">
                        <div>Documentation</div>
                        <div>Adaptability</div>
                        <div>Positivity</div>
                        <div>Communication</div>
                        <div>Responsibilty</div>
                    </div>
    </Container>
        </body>
    )
}

{/* <Table responsive>
                <thead>
                    <tr>
                        <td>Harnessing</td>
                        <td>THT Components</td>
                        <td>Time Management</td>
                        <td>Network Cable</td>
                        <td>Quality inspection</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MS Office</td>
                        <td>Problem Solving</td>
                        <td>Trouble Shooting
                        </td>
                        <td>Team Work</td>
                        <td>Confidence</td>
                    </tr>
                    <tr>
                        <td>Documentation</td>
                        <td>Adaptability</td>
                        <td>Positivity
                        </td>
                        <td>Communication</td>
                        <td>Responsibilty</td>
                    </tr>
                </tbody>
                </Table> */}
