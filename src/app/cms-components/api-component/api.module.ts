import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { RoutingConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { ApiComponentComponent } from './api-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const STATIC_ROUTES: Routes = [
  { 
    path: 'static-page', 
    component: ApiComponentComponent, 
    canActivate: [CmsPageGuard], 
    data: { pageLabel: 'home'} 
  },
  {
    path: 'alias/hilfe',
    component: PageLayoutComponent,
    data: {pageLabel:'/faq'},
    canActivate: [CmsPageGuard], 
  },
  // {
  //   path:'contact',
  //   component: ApiComponentComponent,
  //   data:{pageLabel:'/contact'},
  //   canActivate: [CmsPageGuard],
  // }
]

@NgModule({ 
  declarations: [ApiComponentComponent],
  imports: [
    CommonModule,
    UrlModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forChild(STATIC_ROUTES),
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
export class apiModule { }
  