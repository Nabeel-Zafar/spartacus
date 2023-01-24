import { Component, OnInit } from '@angular/core';
import { ProductSummaryComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent extends ProductSummaryComponent {
  ngOnInit() {
  }

}

