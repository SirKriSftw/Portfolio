import { Component, Input } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience-cmd',
  templateUrl: './experience-cmd.component.html',
  styleUrl: './experience-cmd.component.css'
})
export class ExperienceCmdComponent {

  @Input() arg: string[] = [];
  experience: Experience[] = [];
  hasArgs = false;

  constructor(private experienceService: ExperienceService){}

  ngOnInit()
  {
    this.hasArgs = this.arg.length > 0;
    this.experienceService.getAllExperiences().subscribe(
      (r) => {
        this.experience = r;
        if(this.hasArgs)
        {
          if(this.arg.includes('all'))
            {
              this.arg = this.experience.map(e => e.name);
            }
          this.getSelectedExperiences();
        }
      }
    );
  }

  getSelectedExperiences()
  {
    this.fixArgs();
    let selectedExperiences: Experience[] = [];
    this.arg.forEach((a, i) => {
      let currentExperience = this.experience.find(p => p.name.toLowerCase() == a.toLowerCase());
      if(currentExperience) selectedExperiences.push(currentExperience);
    })
    this.experience = selectedExperiences;
  }
  
  fixArg(i: number)
  {
    const tempArg = this.arg.slice(i);
    let fix = "";
    let adding = true;
    tempArg.forEach(a => {
      if(a.endsWith("'"))
      {
        fix = fix  + " " + a;
        adding = false;
      }
      if(adding)
      {
        fix = fix + a;
      }
    })
    return fix = fix.substring(1, fix.length - 1);
  }

  fixArgs()
  {
    let temp: string[] = [];
    let adding = true;
    this.arg.forEach((a, i) => {
      if(a.startsWith("'"))
      {
        temp.push(this.fixArg(i));
       adding = false;
      }
      else if(a.endsWith("'"))
      {
        adding = true;
      }
      else if(adding)
      {
        temp.push(a);
      }
    })
    this.arg = temp;
  }
}
