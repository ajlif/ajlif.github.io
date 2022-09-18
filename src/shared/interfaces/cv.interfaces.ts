
export interface Experience {
    role: string;
    company: string;
    cityAndCountry: string;
    from: string;
    to: string;
    roleDescription: Project[];
    companyLogo?: string;
}

export interface Project {
    name: string;
    description: string;
    TechnologyStacks?: TechnologySide[];
}

export interface TechnologySide {
    side: string;
    description: string;
}

export interface Education {
    university: string;
    degree: string;
    startDate: string;
    endDate: string;
    uniLogo?: string;
    Description?: string;
}

export interface Certification {
    name: string;
    issuingOrganization: string;
    issueDate: string;
    organizationLogo?: string;
}

export interface Skill {
    idCategory: 1 | 2 | 3 | 4;
    /*
     1: language
     2: framework
     3: db
     4:tools
     */
    name: string;
}


export enum themes {
    LIGHT = 'light',
    DARK =  'dark'
}