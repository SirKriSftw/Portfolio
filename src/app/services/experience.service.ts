import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Experience } from '../models/experience.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getAllExperiences() : Observable<Experience[]>
  {
    return from(new Promise<Experience[]>((resolve, reject) => {
      const experiences = [
        {
          name: "Publix",
          position: "Deli Clerk",
          start: new Date(2018, 9),
          end: new Date(2020, 4),
          description: "Organized the case of 120 products, improving efficieny by 30%.\n" +
                      "Managed samples table promoting products and encouraging customers to purchase the item, improving sales by 10%.\n" +
                      "Assisted in serving 100s of customers daily."
        },
        {
          name: "Revature",
          position: ".NET Full Stack Developer",
          start: new Date(2022, 2),
          end: new Date(2023, 5),
          description: "Gained expertise in the .NET Stack (Angular, ASP.NET, SQL).\n" +
                      "Recognized as \'MVP\' by peers and supervisor for exceptional contributions.\n" +
                      "Led two teams in project execution: Directed a team of 4 members for the first project and managed a larger team of 20 for the second, ensuring timely delivery and adherence to project goals.\n" +
                      "Facilitated agile meetings: Headed multiple agile meetings, fostering collaboration and ensuring alignment between team members.\n" +
                      "Contributed to architectural decisions: Played a key role in architecture planning and implementation strategies, optimizing performance and scalability."
        }
      ];
      resolve(experiences);
    }));
  }

  getAllExperienceNames() : Observable<string[]>
  {
    return from(
      new Promise<string[]>((resolve, reject) => {
        const experienceNames = ["Publix", "Revature"];
        resolve(experienceNames);
      })
    )
  }  
}
