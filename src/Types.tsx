interface Project {
    title: string;
    description: string;
    actionItems: string[];
    DateStarted: Date;
    DueDate: Date;
    budget: number;
    contributors: Contributor[];
}

interface Contributor {
    firstName: string;
    lastName: string;
}

export type { Project, Contributor };