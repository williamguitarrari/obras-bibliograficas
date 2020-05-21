import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  totalNames: number;
  nameReplaced: string;
  title = 'obras-bibliograficas';

  ngOnInit() {
  }

  constructor() { }

  replaceName(name: string) {
    this.name = name;
    let specialCharacter: boolean = false;
    let specialName: boolean = false;
    let characterFind: number;
    let nameFind: number;

    let arrayNames = name.split(" ");

    this.totalNames = arrayNames.length;

    let characters = ["da", "de", "do", "das", "dos", "DA", "DE", "DO", "DAS", "DOS"]
    let names = ["filho", "filha", "neto", "neta", "sobrinho", "sobrinha", "junior", "FILHO", "FILHA", "NETO", "NETA", "SOBRINHO", "SOBRINHA", "JUNIOR"]

    characters.forEach(element => {
      let characterPosition = arrayNames.indexOf(element);
      if (characterPosition != -1) {
        specialCharacter = true;
        characterFind = characterPosition;
      }
    });

    names.forEach(element => {
      let namePosition = arrayNames.indexOf(element);
      if (namePosition != -1 && arrayNames.length >= 3) {
        specialName = true;
        nameFind = namePosition;
      }
    });

    if (this.totalNames == 1) {
      this.nameReplaced = arrayNames[arrayNames.length - 1].toUpperCase();
    }

    else if (specialCharacter) {
      this.nameReplaced = arrayNames[arrayNames.length - 1].toUpperCase() + ',' + ' '
        + arrayNames[0].substring(0, 1).toUpperCase() + arrayNames[0].substring(1).toLowerCase() + ' ' + arrayNames[characterFind].toLowerCase();
    }

    else if (specialName) {
      this.nameReplaced = arrayNames[arrayNames.length - 1].toUpperCase() + ' ' + arrayNames[arrayNames.length - 2].toUpperCase() + ',' + ' '
        + arrayNames[0].substring(0, 1).toUpperCase() + arrayNames[0].substring(1).toLowerCase();
    }

    else {
      this.nameReplaced = arrayNames[arrayNames.length - 1].toUpperCase() + ',' + ' '
        + arrayNames[0].substring(0, 1).toUpperCase() + arrayNames[0].substring(1).toLowerCase();
    }

  }

}
