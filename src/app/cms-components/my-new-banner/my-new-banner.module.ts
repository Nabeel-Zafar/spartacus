import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNewBannerComponent } from './my-new-banner/my-new-banner.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    MyNewBannerComponent
  ],
  imports: [
    CommonModule,
    // ConfigModule.withConfig({
    //   cmsComponents:{
    //     SimpleResponsiveBannerComponent:{
    //       component: MyNewBannerComponent
    //     }
    //   }
    // }as CmsConfig)
  ]
})
export class MyNewBannerModule { }
