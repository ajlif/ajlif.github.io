import { Experience, Certification, Education, Skill } from '../../shared/interfaces/cv.interfaces';

/* Experiences mocks*/
const experienceSiemens: Experience = {
  role: 'Software Engineer @ Siemens',
  company: 'Siemens',
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
export const experiences: Experience[] = [experienceSiemens, experienceOtConsulting];

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
export const skills: Skill[] = [{ idCategory: 1, name: 'Typescript/Javascript' }, { idCategory: 1, name: 'Golang' },
  { idCategory: 2, name: 'Angular' }, { idCategory: 2, name: 'React' }, { idCategory: 2, name: 'AWS/serverless' },
  { idCategory: 3, name: 'Visual studio code' }, { idCategory: 3, name: 'Eclipse' }, { idCategory: 3, name: 'Postman' }, { idCategory: 3, name: 'Docker' },
  { idCategory: 3, name: 'Git' }, { idCategory: 4, name: 'Oracle' }, { idCategory: 4, name: 'PostgreSQL' }, { idCategory: 4, name: 'MongoDb' },
  { idCategory: 4,name: 'Learning never stops — and neither does the hunger 🤤'}]; 
