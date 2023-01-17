import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry, ProductSearchService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, pluck, take } from 'rxjs/operators';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {

  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries(); 

  constructor(private cartService: ActiveCartService, 
              private routingService: RoutingService,
              private productSearchService: ProductSearchService,) { }

  ngOnInit(): void {
  }

  goToRandomProduct(){
    this.productSearchService.search('cam');
    this.productSearchService.getResults().
      pipe(
        filter((res:any) => res.hasOwnProperty('products')),
        pluck('products'),
        take(1)
      )
    .subscribe((products: any[]) => {
      const randomProduct = products[Math.floor(Math.random() * products.length)]
      this.routingService.go({
      cxRoute: 'product',
      params: {code: randomProduct.code, name:randomProduct.name}
      })
    });
  }

}
