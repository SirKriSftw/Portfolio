import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getAllSkills() : Observable<Skill[][]>
  {
    return from(new Promise<Skill[][]>((resolve, reject) => {
      const skills = [
        [{
          type: "Languages",
          name: "Java",
          experience: "7 years"
        },
        {
          type: "Languages",
          name: "Python",
          experience: "6 years"
        },
        {
          type: "Languages",
          name: "C#",
          experience: "6 years"
        },
        {
          type: "Languages",
          name: "Ruby",
          experience: "2 years"
        }],
        [{
          type: "Frontend",
          name: "HTML/CSS",
          experience: "7 years"
        },
        {
          type: "Frontend",
          name: "JavaScript",
          experience: "5 years"
        },
        {
          type: "Frontend",
          name: "TypeScript",
          experience: "3 years"
        },
        {
          type: "Frontend",
          name: "Angular",
          experience: "3 years"
        }],
        [{
          type: "Backend",
          name: "SQL",
          experience: "7 years"
        },
        {
          type: "Backend",
          name: "MongoDB",
          experience: "5 years"
        }],
        [{
          type: "Technologies",
          name: "ASP.NET",
          experience: "3 years"
        },
        {
          type: "Technologies",
          name: "GitHub",
          experience: "6 years"
        },
        {
          type: "Technologies",
          name: "Azure",
          experience: "4 years"
        },
        {
          type: "Technologies",
          name: "Docker",
          experience: "2 years"
        }]
      ];
      resolve(skills);
    }));
  }
}
