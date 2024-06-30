import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Command } from '../models/command.model';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  constructor() { }

  getAllCommands() : Observable<Command[]>
  {
    return from(new Promise<Command[]>((resolve, reject) => {
      const commands = [
        {
          name: "help",
          description: "To use help command just do 'help [commands], command list can be found using 'commands' command."
        },
        {
          name: "commands",
          description: "Shows list of all available commands."
        },
        {
          name: "clear",
          description: "Clears screen."
        },
        {
          name: "about-me",
          description: "More about me and my personality."
        },
        {
          name: "contact-me",
          description: "Information on how to contact me."
        },
        {
          name: "projects",
          description: "A list of my past projects."
        },
        {
          name: "skills",
          description: "A list of technologies I have experience with."
        },
        {
          name: "testimonials",
          description: "What past co-workers have to say about me."
        }
      ];
      resolve(commands);
    }));
  }

  getAllCommandNames() : Observable<string[]>
  {
    return from(
      new Promise<string[]>((resolve, reject) => {
        const commandNames = ["help", "commands", "clear", "about-me","contact-me","projects","skills","testimonials"];
        resolve(commandNames);
      })
    )
  }
}
