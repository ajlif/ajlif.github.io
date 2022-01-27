import axios from "axios";
import { Experience, Certification, Education } from "../shared/interfaces/cv.interfaces";

const baseURL = "https://jsonplaceholder.typicode.com";

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
            description: `Realization of an automation system with NLP and Robotic Process Automation solutions.
            Technology stacks:
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

let masterDegree : Education = {
    university: 'University of Modena and Reggio Emilia - Italy',
    degree : 'Master in Computer Science',
    startDate: '2017',
    endDate: '2020'
}
let bachelorDegree : Education = {
    university: 'Faculty of Sciences of Bizerte - University of Carthage',
    degree : 'Bachelor of Computer Science',
    startDate: '2012',
    endDate: '2015'
}
let education : Education[] = [masterDegree, bachelorDegree];

let ielts: Certification ={
    name:'Ielts (B2)',
    issuingOrganization:'British Council',
    issueDate:'2020'
}
let celi: Certification ={
    name:'CELI (B2)',
    issuingOrganization:'The University for Foreigners Perugia',
    issueDate:'2017'
}
let tcf: Certification ={
    name:'TCF (B2)',
    issuingOrganization:'French Institute of Tunisia',
    issueDate:'2017'
}
let certifications : Certification[] = [ielts, celi, tcf];

axios.interceptors.response.use(function (response) {
    if (response) {
        switch (response.request ? response.request.responseURL : '') {
            case (`${baseURL}/posts`):
                return "Hi, My name is Ala, i'm a full stack developer looking for new challenges and different realities in the IT industry. Currently i live in Milan, Italy 🇮🇹 and i'm open to work.";
            case (`${baseURL}/comments`):
                return experiences;
            case (`${baseURL}/users`):
                return education;
            case (`${baseURL}/photos`):
                return certifications;
            case (`${baseURL}/user`):
                return "dd";
            default:
                return "";
        }
    }
}, function (error) {
    console.log(error);
});


export function getProfileInformations(): Promise<any> {
    return axios.get(`${baseURL}/posts`);
}

export function getExperiences(): Promise<any> {
    return axios.get(`${baseURL}/comments`);
}

export function getEducation(): Promise<any> {
    return axios.get(`${baseURL}/users`);
}

export function getCertifications():Promise<any> {
   return axios.get(`${baseURL}/photos`);
}

export function getSkills() {
    axios.get(`${baseURL}/user`);
}