import { Component, ElementRef, HostListener, Renderer2, ViewChild, ViewContainerRef, input } from '@angular/core';
import { HelpCmdComponent } from '../help-cmd/help-cmd.component';

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


  constructor(private renderer: Renderer2, 
              private elementRef: ElementRef){}

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.setFocus();
    }
  }

  ngAfterViewInit()
  {
    this.setFocus();
  }

  setFocus()
  {
    const inputElement = this.commandInput.element.nativeElement as HTMLInputElement;
    if(!this.isDisabled) this.renderer.selectRootElement(inputElement).focus(); 
  }

  enterCommand(e: Event)
  {
    console.log(`Command: ${this.currentCommand.trim()} fired.`);
    this.isDisabled = true;
    this.runCommand();
  }

  runCommand()
  {
    this.commandContainer.createComponent(HelpCmdComponent);
    this.nextCommandLine.createComponent(CommandLineComponent);
  }
}
