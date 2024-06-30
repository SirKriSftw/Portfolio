import { Component, ElementRef, HostListener, Renderer2, ViewChild, ViewContainerRef, input } from '@angular/core';
import { HelpCmdComponent } from '../help-cmd/help-cmd.component';
import { CommandsService } from '../../services/commands.service';
import { CommandsCmdComponent } from '../commands-cmd/commands-cmd.component';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrl: './command-line.component.css'
})
export class CommandLineComponent {

  @ViewChild('commandContainer', { read: ViewContainerRef }) commandContainer!: ViewContainerRef;
  @ViewChild('nextCommandLine', { read: ViewContainerRef }) nextCommandLine!: ViewContainerRef;
  @ViewChild('commandInput', { read: ViewContainerRef }) commandInput!: ViewContainerRef;

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
    this.nextCommand();
  }

  runCommand(cmd: string, arg: string[])
  {
    if(cmd.trim().toLowerCase() === 'commands') this.commandContainer.createComponent(CommandsCmdComponent);
    if(cmd.trim().toLowerCase() === 'help') 
    {
      const helpComp = this.commandContainer.createComponent(HelpCmdComponent);
      helpComp.instance.arg = arg;
    }
  }

  nextCommand()
  {
    this.nextCommandLine.createComponent(CommandLineComponent);
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
}
