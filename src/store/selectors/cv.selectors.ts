import { CertificationsState, EducationState, ExperiencesState, ProfilePresentation, skillsState } from '../../shared/interfaces/states.interface';
import { RootState } from '../setup/store';

export const selectCertifications = (state: RootState): CertificationsState => state.certifications ;
export const selectEducations = (state: RootState): EducationState => state.educations ;
export const selectExperiences = (state: RootState): ExperiencesState => state.experiences ;
export const selectProfileInf = (state: RootState): ProfilePresentation => state.personalInfo ;
export const selectSkills = (state: RootState): skillsState => state.skills ;
