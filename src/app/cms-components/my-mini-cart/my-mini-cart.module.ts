import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMiniCartComponent } from './my-mini-cart/my-mini-cart.component';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MyMiniCartComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents:{
        MiniCartComponent:{
          component: MyMiniCartComponent
        }
      }
    })
  ]
})
export class MyMiniCartModule { }
