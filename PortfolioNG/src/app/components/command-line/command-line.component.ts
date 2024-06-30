import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { HelpCmdComponent } from '../help-cmd/help-cmd.component';
import { CommandsCmdComponent } from '../commands-cmd/commands-cmd.component';
import { CommandsService } from '../../services/commands.service';
import { AboutMeCmdComponent } from '../about-me-cmd/about-me-cmd.component';
import { ContactMeCmdComponent } from '../contact-me-cmd/contact-me-cmd.component';
import { SkillsCmdComponent } from '../skills-cmd/skills-cmd.component';
import { ProjectsCmdComponent } from '../projects-cmd/projects-cmd.component';
import { TestimonialsCmdComponent } from '../testimonials-cmd/testimonials-cmd.component';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrl: './command-line.component.css'
})
export class CommandLineComponent {

  @ViewChild('commandContainer', { read: ViewContainerRef }) commandContainer!: ViewContainerRef;
  @ViewChild('nextCommandLine', { read: ViewContainerRef }) nextCommandLine!: ViewContainerRef;
  @ViewChild('commandInput', { read: ViewContainerRef }) commandInput!: ViewContainerRef;

  @Input() pastCommands: string[] = [];
  @Input() index: number = 0;

  commands: string[] = [];
  projects: string[] = [];
  currentCommand: string = "";
  isDisabled = false;
  errorMsg = false;


  constructor(private renderer: Renderer2, 
              private elementRef: ElementRef,
              private commandsService: CommandsService,
              private projectsService: ProjectsService){}

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    if (!this.elementRef.nativeElement.contains(target) && !this.isDisabled) {
      this.setFocus();
    }
  }

  ngAfterViewInit()
  {
    this.setFocus();
  }

  ngOnInit()
  {
    this.commandsService.getAllCommandNames().subscribe(
      (r) => {
        this.commands = r;
      }
    );
  }

  setFocus()
  {
    const inputElement = this.commandInput.element.nativeElement as HTMLInputElement;
    if(!this.isDisabled) this.renderer.selectRootElement(inputElement).focus(); 
  }

  enterCommand()
  {
    const commandToRun = this.currentCommand.split(' ')[0];
    const argToRun = this.currentCommand.split(' ').splice(1);
    if(this.commands.includes(commandToRun.trim().toLowerCase()))
    {
      console.log(`Command: ${this.currentCommand.trim()} fired.`);
      this.runCommand(commandToRun, argToRun);
    }
    else
    {
      this.errorMsg = true;
    }
    this.isDisabled = true;
    this.makeNextCommandLine();
  }

  runCommand(cmd: string, args: string[])
  {
    let cleanCmd = cmd.trim().toLowerCase();
    if(cleanCmd === 'commands') this.commandContainer.createComponent(CommandsCmdComponent);
    else if(cleanCmd === 'help') 
    {
      const helpComp = this.commandContainer.createComponent(HelpCmdComponent);
      helpComp.instance.arg = args;
    }
    else if(cleanCmd === 'clear') window.location.reload();
    else if(cleanCmd === 'about-me') this.commandContainer.createComponent(AboutMeCmdComponent);
    else if(cleanCmd === 'contact-me') this.commandContainer.createComponent(ContactMeCmdComponent);
    else if(cleanCmd === 'skills') this.commandContainer.createComponent(SkillsCmdComponent);
    else if(cleanCmd === 'projects') 
    {
      const projectCmd = this.commandContainer.createComponent(ProjectsCmdComponent);
      projectCmd.instance.arg = args;
    }
    else if(cleanCmd === 'testimonials') this.commandContainer.createComponent(TestimonialsCmdComponent);
  }

  makeNextCommandLine()
  {
    const nextCommandLineRef = this.nextCommandLine.createComponent(CommandLineComponent);
    this.pastCommands.push(this.currentCommand);
    nextCommandLineRef.instance.pastCommands = this.pastCommands;
    nextCommandLineRef.instance.index = this.pastCommands.length;

    setTimeout(() => {
      nextCommandLineRef.location.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0);
  }

  autocomplete(e: Event)
  {
    e.preventDefault();
    const words = this.currentCommand.trim().split(/\s+/);

    const lastWord = words[words.length -1];
    const firstWord = words[0];

    if(firstWord != "projects")
    {
      const matchedCommand = this.commands.find(c => c.startsWith(lastWord));
      if(matchedCommand)
      {
        words.length > 1 ? this.currentCommand = words.slice(0, -1).join(' ') + " " + matchedCommand : this.currentCommand = matchedCommand;
      }
    } 

    if(firstWord == "projects")
    {
      if(this.projects.length == 0) 
      {
        this.projectsService.getAllProjectNames().subscribe(
          (r) => {
            this.projects = r;
          }
        );
      }
      
      let matchedProject = this.projects.find(p => p.startsWith(lastWord));
      if(("all").startsWith(lastWord)) matchedProject = "all";
      if(matchedProject)
      {
        if(matchedProject?.split(" ").length > 1) matchedProject = `'${matchedProject}'`;
        this.currentCommand = words.slice(0, -1).join(' ') + " " + matchedProject;
      }
    }
  }

  prevCommand(e: Event)
  {
    e.preventDefault();
    if(!(this.pastCommands.length > 0)) return;
    if(this.index > 0) this.index--;
    this.commandInput.element.nativeElement.value = this.pastCommands[this.index];
    this.currentCommand = this.pastCommands[this.index];
  }

  nextCommand(e: Event)
  {
    e.preventDefault();
    if(this.index >= this.pastCommands.length)
    {
      this.currentCommand = "";
      return;
    }
    this.index++;
    this.commandInput.element.nativeElement.value = this.pastCommands[this.index];
    this.currentCommand = this.pastCommands[this.index];
  }
}
