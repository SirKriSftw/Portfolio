import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-cmd',
  templateUrl: './projects-cmd.component.html',
  styleUrl: './projects-cmd.component.css'
})
export class ProjectsCmdComponent {
  @Input() arg: string[] = [];
  projects: Project[] = [];
  hasArgs = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit()
  {
    this.projectsService.getAllProjects().subscribe(
      (r) => {
        this.projects = r;
        this.hasArgs = this.arg.length > 0;
        if(this.hasArgs) this.getSelectedProjects();
      }
    );
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

  getSelectedProjects()
  {
    this.fixArgs();
    let selectedProjects: Project[] = [];
    this.arg.forEach((a, i) => {
      let currentProject = this.projects.find(p => p.name.toLowerCase() == a.toLowerCase());
      if(currentProject) selectedProjects.push(currentProject);
    })
    this.projects = selectedProjects;
  }
}
