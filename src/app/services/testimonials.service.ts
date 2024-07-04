import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }

  getAllTestimonials() : Observable<Testimonial[]>
  {
    return from(new Promise<Testimonial[]>((resolve, reject) => {
      const testimonials = [
        {
          name: "Cody Scholberg",
          relationship: "Ex-Revature Coworker",
          message: "It is with immense pleasure that I write this testimonial for Kristian Perez. I am currently a lead full-stack Java developer at Florida Power & Light, but I am Kristian's former coworker; we were both in the same training class at Revature, Inc. in 2022, where we learned .NET, SQL, and Angular software development.\n" +
          "Kristian picked things up very quickly, and he was one of the top performers in our group.  He was actually awarded and recognized as our number one trainee by management; he absolutely deserved it. " +
          "I also had the privilege of working with him on the same team on a group project.  In addition to the software development technical expertise that he contributed to our team, he also demonstrated that he was able to cooperate well with the rest of the team for the greater goal of the whole project. " +
          "He was able to do this due to his ability to communicate clearly, kindly, and patiently with others.\n" +
          "Although I have not worked with him since 2022, I would be happy to have him on my team again any point in the future. " + 
          "I am glad to have the chance to write this testimonial for him so that I can vouch for his ability to be an integral contributor to any software development team he ends up on.\n " +
          "Feel free to reach me at my personal email address; we can also connect over the telephone upon request.",
          contact: "thecodercody@gmail.com"
        },
        {
          name: "Michael Lai",
          relationship: "Ex-Revature Coworker",
          message: "We worked closely together at Revature where he was group leader for one of the projects while I was working on the API code.\n " +
          "Throughout our time working together, I got to know Kristian well on both a professional and personal level. He is trustworthy, responsible, hard-working, and loyal — traits that make them an exceptional colleague and team player.\n " +
          "Speaking on his skill, his understanding of how Git Hub works has helped our team in organizing our projects in terms on having necessary branches and builds so people’s work was not overwritten when we sync our code together." + 
          "He works well with other and has often assist the team members in resolving problematic area of the code.\n " + 
          "Together, we were able to complete the final project, which would not have been possible without Kristian’s commitment, resilience, and creative problem-solving skills.\n " +
          "I wholeheartedly believe Kristian has the skills, experience, and spirit to tackle anything required of them. They are an asset to any employer, and you can trust them to succeed in the position and exceed your exceptions.\n " +
          "If you have any questions, please feel free to contact me.",
          contact: "Michael.C.Lai@outlook.com"
        },
      ];
      resolve(testimonials);
    }));
  }
}
