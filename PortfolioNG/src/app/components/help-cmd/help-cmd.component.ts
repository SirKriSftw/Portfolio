import { Component, Input } from '@angular/core';
import { Command } from '../../models/command.model';
import { CommandsService } from '../../services/commands.service';

@Component({
  selector: 'app-help-cmd',
  templateUrl: './help-cmd.component.html',
  styleUrl: './help-cmd.component.css'
})
export class HelpCmdComponent {
  @Input() arg: string[] = [];
  commands: Command[] = [];
  descriptions: string[] = [];

  constructor(private commandsService: CommandsService){}

  ngOnInit()
  {
    this.commandsService.getAllCommands().subscribe(
      (r) => {
        this.commands = r;
        this.getHelp();
      }
    );
  }

  getHelp()
  {
    if(this.arg.length < 1) this.descriptions.push("Try running 'commands' to see all possible commands.");
    this.arg.forEach((cmd) => 
    {
      let foundCmd = this.commands.find(c => c.name == cmd);

      console.log(foundCmd);
      if(foundCmd)
      {
        this.descriptions.push(`${cmd} => ${foundCmd.description}`);
      }
      else
      {
        this.descriptions.push(`Command '${cmd}' not found. Try running 'commands' to see all possible commands.`);
      }
    })

  }
}
