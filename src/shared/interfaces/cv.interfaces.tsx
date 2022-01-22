
export interface Experience {
    role: string;
    company: string;
    cityAndCountry: string;
    from: string;
    to: string;
    roleDescription:Project[];
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