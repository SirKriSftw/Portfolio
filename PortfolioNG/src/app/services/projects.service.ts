import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getAllProjects() : Observable<Project[]>
  {
    return from(new Promise<Project[]>((resolve, reject) => {
      const projects = [
        {
          name: "ColorfulBot",
          description: "A simple discord bot that allows user to set their color using a hex value or assign themselves roles from a set list.",
          start: new Date(2024, 5),
          end: undefined,
          techUsed: ["JavaScript", "Discord.js", "Docker", "Azure"],
          repoLink: "https://github.com/SirKriSftw/ColorfulBot"
        },
        {
          name: "Etch-a-Sketch",
          description: "A webpage that mimics an etch-a-sketch with the ability to change colors and opacity. A live demo can be ran here: 'https://sirkrisftw.github.io/Etch-a-Sketch/'",
          start: new Date(2024, 3),
          end: undefined,
          techUsed: ["JavaScript", "HTML/CSS"],
          repoLink: "https://github.com/SirKriSftw/Etch-a-Sketch"
        },
        {
          name: "Connect 4",
          description: "A command line version of Connect 4. Face off against a local friend, or against an AI, or let two AIs battle it out.",
          start: new Date(2024, 3),
          end: undefined,
          techUsed: ["Ruby"],
          repoLink: "https://github.com/SirKriSftw/Connect4"
        },
        {
          name: "ProGear",
          description: "An e-com website made with a group of 20 projects, lead by me.",
          start: undefined,
          end: undefined,
          techUsed: ["SQL Server", "ASP.NET", "Entity Framework", "Azure", "Angular"],
          repoLink: "https://github.com/SirKriSftw/ProGear"
        },        
        {
          name: "EventIt",
          description: "A simple web app to keep track of your upcoming events and preventing overlap. Made as a group of 4 with me as lead.",
          start: new Date(2022, 3),
          end: undefined,
          techUsed: ["SQL Server", "ASP.NET", "Entity Framework", "Azure", "Angular"],
          repoLink: "https://github.com/SirKriSftw/EventIt"
        } 
      ];
      resolve(projects);
    }));
  }
}
