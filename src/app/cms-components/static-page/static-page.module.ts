import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { RoutingConfig, ConfigModule, UrlModule } from '@spartacus/core';

const STATIC_ROUTES: Routes = [
  // { 
  //   path: 'static-page', 
  //   component: BestSellerComponent, 
  //   canActivate: [CmsPageGuard], 
  //   data: { pageLabel: 'cart'} 
  // },
  // {
  //   path: 'alias/hilfe',
  //   component: PageLayoutComponent,
  //   data: {pageLabel:'/faq'},
  //   canActivate: [CmsPageGuard], 
  // },
  {
    path:'contact',
    component: BestSellerComponent,
    data:{pageLabel:'/contact'},
    canActivate: [CmsPageGuard],
  }
]

@NgModule({ 
  declarations: [BestSellerComponent],
  imports: [
    CommonModule,
    UrlModule,    
    // RouterModule.forChild(STATIC_ROUTES),
    ConfigModule.withConfig({
      routing:{
        routes:{
          product:{
            paths:[
              'electronics/cameras/:productCode/:name',
              'electronics/cameras/:productCode'
            ]
          }
        }
      }
    }as RoutingConfig)
    
  ]

})
export class StaticPageModule { }
  