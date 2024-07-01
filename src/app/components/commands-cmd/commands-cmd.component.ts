import { Component } from '@angular/core';
import { CommandsService } from '../../services/commands.service';

@Component({
  selector: 'app-commands-cmd',
  templateUrl: './commands-cmd.component.html',
  styleUrl: './commands-cmd.component.css'
})
export class CommandsCmdComponent {

  commands: string[] = [];

  constructor(private commandsService: CommandsService){}

  ngOnInit()
  {
    this.commandsService.getAllCommandNames().subscribe(
      (r) => {
        this.commands = r;
      }
    );
  }
}
