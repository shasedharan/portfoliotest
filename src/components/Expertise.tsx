import React from "react";
import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServerStackIcon, RocketLaunchIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "DynamoDB",
    "REST APIs",
    "Kafka",
    "OAuth2",
    "Microservices Architecture"
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "Helm",
    "Jenkins",
    "GitHub Actions",
    "CloudFormation",
    "Terraform"
];

const labelsThird = [
    "Distributed Systems Design",
    "Event-Driven Architecture",
    "API Design",
    "Asynchronous Workflows",
    "System Performance Optimization"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <ServerStackIcon className="w-12 h-12 text-accent expertise-icon-height"/>
                    <h3>Cloud & Backend Engineering</h3>
                    <p>Specialize in building cloud-native platforms and backend systems that scale seamlessly, adapt to diverse workloads, and maintain peak performance under pressure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <RocketLaunchIcon className="w-12 h-12 text-accent expertise-icon-height"/>
                    <h3>DevOps & Automation</h3>
                    <p>Engineer automated CI/CD pipelines and containerized workflows that accelerate delivery, enhance reliability, and ensure consistent deployments across environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <CubeTransparentIcon className="w-12 h-12 text-accent expertise-icon-height"/>
                    <h3>System Design & Architecture</h3>
                    <p>Architect robust, modular system designs that ensure scalability, fault tolerance, and secure data flows — creating resilient platforms built to evolve with business needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
