import { Component, OnInit } from '@angular/core';
import { ProductSummaryComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss']
})
export class CustomProductSummaryComponent extends ProductSummaryComponent {}
