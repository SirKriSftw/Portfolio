import { Component } from '@angular/core';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrl: './command-line.component.css'
})
export class CommandLineComponent {

  commands: string[] = ["help","about-me","contact-me","projects","skills","commands","testimonials"]
  currentCommand: string = "";

  enterCommand(e: Event)
  {
    console.log(`Command: ${this.currentCommand} fired.`);
  }
}
