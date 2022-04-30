import axios from 'axios';
import { Experience, Certification, Education, Skill } from '../shared/interfaces/cv.interfaces';
import { experiences, certifications, educations, skills } from '../shared/mocks/dataMocks';

const baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.response.use((response) => {
  if (response) {
    switch (response.request ? response.request.responseURL : '') {
      case (`${baseURL}/posts`):
        return 'Hi, My name is Ala, i\'m a Software Engineer looking for new challenges and different realities in the IT industry. Currently i live in Milan, Italy 🇮🇹 and i\'m open to work.';
      case (`${baseURL}/comments`):
        return experiences;
      case (`${baseURL}/users`):
        return educations;
      case (`${baseURL}/photos`):
        return certifications;
      case (`${baseURL}/todos`):
        return skills;
      default:
        return '';
    }
  }
}, (error) => {
  console.error(error);
});


export function getProfileInformations(): Promise<string> {
  return axios.get(`${baseURL}/posts`);
}

export function getExperiences(): Promise<Experience[]> {
  return axios.get(`${baseURL}/comments`);
}

export function getEducation(): Promise<Education[]> {
  return axios.get(`${baseURL}/users`);
}

export function getCertifications():Promise<Certification[]> {
  return axios.get(`${baseURL}/photos`);
}

export function getSkills():Promise<Skill[]> {
  return axios.get(`${baseURL}/todos`);
}
