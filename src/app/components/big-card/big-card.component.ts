import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  @Input() photoCover: string = "";
  @Input() cardData: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() id: string = "0";

  ngOnInit(): void {
    this.setValuesToComponent();
  }
  
  setValuesToComponent() {
    const result = dataFake[0];

    this.id = result.id;
    this.photoCover = result.photoCover;
    this.cardData = result.data;
    this.cardTitle = result.title;
    this.cardDescription = result.description[0];
  }
}
