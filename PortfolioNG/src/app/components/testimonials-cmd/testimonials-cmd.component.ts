import { Component } from '@angular/core';
import { Testimonial } from '../../models/testimonial.model';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials-cmd',
  templateUrl: './testimonials-cmd.component.html',
  styleUrl: './testimonials-cmd.component.css'
})
export class TestimonialsCmdComponent {

  testimonials: Testimonial[] = [];

  constructor(private testimonialsService: TestimonialsService) {}

  ngOnInit() 
  {
    this.testimonialsService.getAllTestimonials().subscribe(
      (r) => {
        this.testimonials = r;
      }
    );
  }

  messageSpacing(m: string)
  {
    return m.split('\n');
  }

  iconName(c?: string)
  {
    if(!c) return "";
    else if(c.includes("@")) return "email";
    else if(c.includes("linkedin")) return "linkedin";
    else return "";
  }
}
