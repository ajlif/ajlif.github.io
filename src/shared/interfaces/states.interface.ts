import { Certification, Education, Experience, Skill } from './cv.interfaces';

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

export interface CertificationsState{
    content: Certification[];
    status: '' | 'fulfilled' | 'loading' |'failed';
}

export interface skillsState {
    content: Skill[];
    status: '' | 'fulfilled' | 'loading' |'failed';
}

export interface themeState {
    theme: string;
}