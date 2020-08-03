import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
