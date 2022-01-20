import axios from "axios";
import {Experience} from "../shared/interfaces/cv.interfaces";

const baseURL = "https://jsonplaceholder.typicode.com/urlnotready";

let experience3: Experience = {
    role: 'Software Engineer',
    company: 'Alten @ Siemens',
    cityAndCountry: 'Milan, Italy',
    from: 'Oct 2021',
    to:'Present',
    roleDescription: [{
        name: 'Cerberus Portal',
        description:'Cerberus Portal is a secure and Cloud-based web portal that allows service providers to take the next step in digitalizing their service offering. Save costs and decrease travel times by knowing what is going on with your customer sites remotely. Increase your service efficiency by being able to see everything that is going on in one place.'
    }]

}
let experiences : Experience[] = [experience3, experience3, experience3, experience3];

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error && error.response && error.response.status === 404) {
        switch (error.request ? error.request.responseURL : '') {
            case (`${baseURL}/profile`):
                return "Hi, My name is Ala, i'm a full stack developer looking for new challenges and different realities in the IT industry. Currently i live in Milan, Italy 🇮🇹 and i'm open to work.";
            case (`${baseURL}/experiences`):
                return experiences;
            case (`${baseURL}/profile`):
                return "d";
            case (`${baseURL}'/education`):
                return "d";
            case (`${baseURL}'/certifications`):
                return "d";
            case(`${baseURL}'/skills`):
                return "d";
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