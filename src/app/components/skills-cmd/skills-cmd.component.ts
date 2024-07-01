import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills-cmd',
  templateUrl: './skills-cmd.component.html',
  styleUrl: './skills-cmd.component.css'
})
export class SkillsCmdComponent {

  skills: Skill[][] = [];

  constructor(private skillsService: SkillsService){}

  ngOnInit()
  {
    this.skillsService.getAllSkills().subscribe(
      (r) => {
        this.skills = r;
      }
    );
  }
}
