import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  @ViewChild('sound') soundPlayer!: ElementRef;

  hasPlayedSound = false;
  selfieUrl: string = "assets/images/selfie.png";
  dialUpUrl: string = "assets/audio/dailup-internet.mp3";
  introMsg: string[] = [
    "Hello! And welcome to Kristian Perez's Portfolio website. To get the full effect I suggest making your page full screen.",
    "Navigating this site requires you to use commands. To see all possible commands type 'commands' and press enter!",
    "You can use the 'tab' key to autocomplete commands and up/down arrow keys to navigate previously used commands.",
    "Links to things like GitHub, LinkedIn, or a live demo can be accessed by pressing their icons, and emails can be opened pressing the envelope icon."
  ]

  @HostListener('document:click', ['$event'])
  @HostListener('document:keydown', ['$event'])
  documentClick(event: MouseEvent): void {
    if(!this.hasPlayedSound)
    {
      this.playSound();
      this.hasPlayedSound = true;
    }
  }

  playSound()
  {
    const audioPlayer = this.soundPlayer.nativeElement as HTMLAudioElement;
    audioPlayer.play();
  }
}
