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
          "I am glad to have the chance to write this testimonial for him so that I can vouch for his ability to be an integral contributor to any software development team he ends up on.",
          contact: "thecodercody@gmail.com"
        },
      ];
      resolve(testimonials);
    }));
  }
}
