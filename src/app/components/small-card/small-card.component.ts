import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() cardData: string = "";
  @Input() cardTitle: string = "";
  @Input() id: string = "0";

  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }
  
  setValuesToComponent(id: string) {
    const result = dataFake[Number(id) - 1];

    this.photoCover = result.photoCover;
    this.cardData = result.data;
    this.cardTitle = result.title;
  }
}
