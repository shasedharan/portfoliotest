import React from "react";
import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CubeTransparentIcon, ServerStackIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Domain-Driven Design",
    "Event-Driven Architecture",
    "API Design",
    "Scalability",
    "Resilience"
];

const labelsSecond = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "DynamoDB",
    "REST APIs",
    "OAuth2",
    "Microservices",
    "AWS",
    "Redis",
    "Kafka"
];

const labelsThird = [
    "Docker",
    "Kubernetes",
    "Helm",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
    "CloudWatch"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <CubeTransparentIcon className="w-12 h-12 text-accent expertise-icon-height"/>
                    <h3>System Architecture & Design</h3>
                    <p>Architect distributed systems that balance performance, modularity, and long-term resilience — translating complex requirements into clear, adaptable designs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <ServerStackIcon className="w-12 h-12 text-accent expertise-icon-height"/>
                    <h3>Cloud & Backend Engineering</h3>
                    <p>Engineer robust backend services and cloud-native solutions that handle demanding workloads, optimize data flow, and deliver exceptional runtime efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <RocketLaunchIcon className="w-12 h-12 text-accent expertise-icon-height"/>
                    <h3>DevOps & Automation</h3>
                    <p>Automate the software lifecycle with containerized infrastructure, streamlined CI/CD workflows, and intelligent monitoring that keeps systems fast and dependable.</p>
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
