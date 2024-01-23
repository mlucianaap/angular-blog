import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescrition: string[] = [""];
  contentData: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
    );

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];
    this.contentTitle = result.title;
    this.contentDescrition = result.description;
    this.contentData = result.data;
    this.photoCover = result.photoCover;
  }
}
