export interface Project {
    name: string;
    start?: Date;
    end?: Date;
    description: string;
    techUsed: string[];
    repoLink?: string;
    liveDemo?: string;
}