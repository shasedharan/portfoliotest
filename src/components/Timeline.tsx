import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="OCT 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Certec Consulting Inc</h3>
            <h5 className="vertical-timeline-element-title">Software Engineer</h5>
            <h4 className="vertical-timeline-element-subtitle">Sunnyvale, CA, US</h4>
            <p>
              [Java | Docker | Kubernetes | Helm | Cloud-Native Microservices]
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JUL 2021 – MAR 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Amazon Web Services</h3>
            <h5 className="vertical-timeline-element-title">Software Development Engineer</h5>
            <h4 className="vertical-timeline-element-subtitle">Seattle, WA, US</h4>
            <p>
              [AWS | EMR | EC2 | S3 | IAM | DynamoDB | Redis | CloudFormation | Jenkins | Java | Spring Boot]
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="DEC 2018 – JUN 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Unitive Technologies Private Limited</h3>
            <h5 className="vertical-timeline-element-title">Software Developer</h5>
            <h4 className="vertical-timeline-element-subtitle">Chennai, TN, India</h4>
            <p>
              [Java | Spring Boot | ReactJS | REST APIs | Web Application Development]
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JUN 2017 – JUL 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h5 className="vertical-timeline-element-title">Member Technical Staff</h5>
            <h3 className="vertical-timeline-element-title">Zoho Corporation</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai, TN, India</h4>
            <p>
              [Java | JavaScript | HTML | CSS | Cassandra | Performance Optimization]
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
