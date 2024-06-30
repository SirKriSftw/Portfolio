import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { HelpCmdComponent } from '../help-cmd/help-cmd.component';
import { CommandsCmdComponent } from '../commands-cmd/commands-cmd.component';
import { CommandsService } from '../../services/commands.service';
import { AboutMeCmdComponent } from '../about-me-cmd/about-me-cmd.component';
import { ContactMeCmdComponent } from '../contact-me-cmd/contact-me-cmd.component';

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

  commands: string[] = ["help","about-me","contact-me","projects","skills","commands","testimonials"]
  currentCommand: string = "";
  isDisabled = false;
  errorMsg = false;


  constructor(private renderer: Renderer2, 
              private elementRef: ElementRef,
              private commandsService: CommandsService){}

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

    console.log(this.pastCommands);
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

  runCommand(cmd: string, arg: string[])
  {
    let cleanCmd = cmd.trim().toLowerCase();
    if(cleanCmd === 'commands') this.commandContainer.createComponent(CommandsCmdComponent);
    if(cleanCmd === 'help') 
    {
      const helpComp = this.commandContainer.createComponent(HelpCmdComponent);
      helpComp.instance.arg = arg;
    }
    if(cleanCmd === 'clear') window.location.reload();
    if(cleanCmd === 'about-me') this.commandContainer.createComponent(AboutMeCmdComponent);
    if(cleanCmd === 'contact-me') this.commandContainer.createComponent(ContactMeCmdComponent);
  }

  makeNextCommandLine()
  {
    const nextCommandLineRef = this.nextCommandLine.createComponent(CommandLineComponent);
    this.pastCommands.push(this.currentCommand);
    nextCommandLineRef.instance.pastCommands = this.pastCommands;
    nextCommandLineRef.instance.index = this.pastCommands.length;
  }

  autocomplete(e: Event)
  {
    e.preventDefault();
    const words = this.currentCommand.trim().split(/\s+/);

    const lastWord = words[words.length -1];

    const matchedCommand = this.commands.find(c => c.startsWith(lastWord));
    if(matchedCommand)
    {
      words.length > 1 ? this.currentCommand = words.slice(0, -1).join(' ') + " " + matchedCommand : this.currentCommand = matchedCommand;
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
