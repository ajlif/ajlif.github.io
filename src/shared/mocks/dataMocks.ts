import { Experience, Certification, Education, Skill } from '../../shared/interfaces/cv.interfaces';

/* Experiences mocks*/
const experienceSiemens: Experience = {
  role: 'Software Engineer @ Siemens',
  company: 'Alten',
  cityAndCountry: 'Milan, Italy',
  from: 'Oct 2021',
  to: 'Present',
  roleDescription: [{
    name: 'Siemens Smart Building',
    description: `Implementation of products and systems related to Fire safety and smart building management.
        Technology stacks: Angular, golang, AWS .
        tools: Visual studio Code ,git , Gitlab, SonarQube.
        `
  }]
};
const experienceOtConsulting: Experience = {
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
            Backend: Node.js .`
    },
    {
      name: 'DIGMOB',
      description: `Implementation and test of the new mobile banking app (CREDEM bank). I had the chance to be a part of a large international professional team which helped me to improve my skills.
            Technology stacks : kony framework (cloud-based enterprise mobility solutions
            and leader among cross-platform mobile application development).
            - developing new features
            - bugs fixing 
            - code refactoring
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
};
const experienceBGI: Experience = {
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
};
export const experiences: Experience[] = [experienceSiemens, experienceOtConsulting, experienceBGI];

/* Education mocks*/
const masterDegree : Education = {
  university: 'University of Modena and Reggio Emilia - Italy',
  degree : 'Master in Computer Science',
  startDate: '2017',
  endDate: '2020'
};
const bachelorDegree : Education = {
  university: 'Faculty of Sciences of Bizerte - University of Carthage',
  degree : 'Bachelor of Computer Science',
  startDate: '2012',
  endDate: '2015'
};
export const educations : Education[] = [masterDegree, bachelorDegree];

/* Certifications mocks*/
const ielts: Certification ={
  name:'Ielts (B2)',
  issuingOrganization:'British Council',
  issueDate:'2020'
};
const celi: Certification ={
  name:'CELI (B2)',
  issuingOrganization:'The University for Foreigners Perugia',
  issueDate:'2017'
};
const tcf: Certification ={
  name:'TCF (B2)',
  issuingOrganization:'French Institute of Tunisia',
  issueDate:'2014'
};

export const certifications : Certification[] = [ielts, celi, tcf];

/* Skills mocks*/
export const skills: Skill[] = [{ idCategory: 1, name: 'Javascript' }, { idCategory: 1, name: 'Typescript' }, { idCategory: 1, name: 'Java' }, { idCategory: 1, name: 'Python' },
  { idCategory: 2, name: 'Angular' }, { idCategory: 2, name: 'React' }, { idCategory: 2, name: 'Express js' }, { idCategory: 2, name: 'Django' }, { idCategory: 2, name: 'Spring' },
  { idCategory: 3, name: 'Visual studio code' }, { idCategory: 3, name: 'Eclipse' }, { idCategory: 3, name: 'Postman' }, { idCategory: 3, name: 'Docker' }, { idCategory: 3, name: 'Git' },
  { idCategory: 4, name: 'Oracle' }, { idCategory: 4, name: 'MySql' }, { idCategory: 4, name: 'MongoDb' }]; 
