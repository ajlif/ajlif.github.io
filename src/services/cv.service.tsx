import axios from "axios";
import { Experience } from "../shared/interfaces/cv.interfaces";

const baseURL = "https://jsonplaceholder.typicode.com/urlnotready";

let experienceSiemens: Experience = {
    role: 'Software Engineer',
    company: 'Alten @ Siemens',
    cityAndCountry: 'Milan, Italy',
    from: 'Oct 2021',
    to: 'Present',
    roleDescription: [{
        name: 'Cerberus Portal',
        description: 'Working on Cerberus Portal which is a secure and Cloud-based web portal that allows service providers to take the next step in digitalizing their service offering. Save costs and decrease travel times by knowing what is going on with your customer sites remotely. Increase your service efficiency by being able to see everything that is going on in one place.'
    }]
}

let experienceOtConsulting: Experience = {
    role: 'junior Software Engineer',
    company: 'OT Consulting @ CREDEM bank',
    cityAndCountry: 'Milan, Italy',
    from: 'Jan 2020',
    to: 'Oct 2021',
    roleDescription: [
        {
            name: 'IDENTY',
            description: `Implementation of a session management console used for video recognition of new customers.
            Technology stacks:
            Frontend: react + redux, bootstrap, material-UI, jest, react testing library.
            Backend: ASP.Net.`
        },
        {
            name: 'DIGMOB',
            description: `Implementation and test of the new mobile banking app (CREDEM bank). I had the chance to be a part of a large international professional team which helped me to improve my skills.
            Technology stacks : kony framework (cloud-based enterprise mobility solutions
            and leader among cross-platform mobile application development).
            - developing new features
            - bugs fixing 
            - code refactoring using SonarQube scanner
            - reduce code complexity 
            tools: Visual studio Code , git , Atlassian products Jira and confluence , SonarQube , Microsoft Azure , slack, IBM API connect`
        },
        {
            name: 'Undergraduate internship',
            description: `Realization of an automation system with NLP and Robotic Process Automation solutions
            Frontend: Angular, bootstrap, highCharts.js, pdf.js
            Backend: Django rest framework, nginx, Celery, RabbitMQ, jwt
            Machine learning: Google Cloud AutoML
            tools: Visual Studio Code, git , docker`
        }]
}

let experienceBGI: Experience = {
    role: 'Undergraduate internship',
    company: 'BGI',
    cityAndCountry: 'Tunis, Tunisia',
    from: 'Jan 2015',
    to: 'Jun 2015',
    roleDescription: [{
        name: 'web application',
        description: `Design and development of an invoice collection management application in an hybrid mobile/web environment.
        Technology stacks:
        Html5 , CSS3 , J2EE , Spring , JavaServer Faces , Javascript , Hibernate , git.`
    }]
}

let experiences: Experience[] = [experienceSiemens, experienceOtConsulting, experienceBGI];

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error && error.response && error.response.status === 404) {
        switch (error.request ? error.request.responseURL : '') {
            case (`${baseURL}/profile`):
                return "Hi, My name is Ala, i'm a full stack developer looking for new challenges and different realities in the IT industry. Currently i live in Milan, Italy 🇮🇹 and i'm open to work.";
            case (`${baseURL}/experiences`):
                return experiences;
            case (`${baseURL}'/education`):
                return "dg";
            case (`${baseURL}'/certifications`):
                return "dr";
            case (`${baseURL}'/skills`):
                return "dd";
            default:
                return error;
        }
    }
});


export function getProfileInformations(): Promise<any> {
    return axios.get(`${baseURL}/profile`);
}

export function getExperiences(): Promise<any> {
    return axios.get(`${baseURL}/experiences`);
}

export function getEducationBackground() {
    axios.get(`${baseURL}'/education`);
}

export function getCertifications() {
    axios.get(`${baseURL}'/certifications`);
}

export function getSkills() {
    axios.get(`${baseURL}'/skills`);
}