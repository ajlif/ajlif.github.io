import { Education, Experience } from './cv.interfaces';

export interface ProfilePresentation {
    content: string;
    status: '' | 'fulfilled' | 'loading' |'failed';
}

export interface ExperiencesState {
    content: Experience[];
    status: '' | 'fulfilled' | 'loading' |'failed';
}

export interface EducationState {
    content: Education[];
    status: '' | 'fulfilled' | 'loading' |'failed';
}
