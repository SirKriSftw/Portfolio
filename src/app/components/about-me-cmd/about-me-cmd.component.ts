import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-cmd',
  templateUrl: './about-me-cmd.component.html',
  styleUrl: './about-me-cmd.component.css'
})
export class AboutMeCmdComponent {
  aboutMe: string[] = [];
  intro: string = "";
  passion: string = "";
  personal: string = "";
  cta: string = "";


  ngOnInit()
  {
    this.intro = "Hello! I am Kristian Perez, a passionate software developer for over 6 years now. I live in Miami Florida and studied at Florida International University(FIU) " + 
                "to obtain my bachelor's of Computer Science. My expertise lies in the .NET framework, which this portfolio itself is made using.";
    this.passion = "Ever since I was a young age coding has always fascinated me, even before I really knew what coding was. I still carry that passion with me, even working on " +
                    "this project every time I got something working I would exclaim 'that's so cool!!' and I am always like this when it comes to programming. I genuiely love it and find " +
                    "myself working on it constantly when I have a fun project to work on. I love to challenge myself to learn more and more with every project I do.";
    this.personal = "Outside of programming, I enjoy video games and baking. Funny story, for the past few months now I make home-made pancakes into familiar shapes, animals or characters " +
                    "and have friends guess what I made. It's always fun to see what crazy guess they have. At the end of the day I am just an optimistic who just loves helping others where I can."
    this.cta = "Thank you for taking the time to check out my portfolio! Feel free to checkout some of my work or just reach out by using the 'contact-me' command."
    this.aboutMe.push(this.intro);
    this.aboutMe.push(this.passion);
    this.aboutMe.push(this.personal);
    this.aboutMe.push(this.cta);
  }
}
