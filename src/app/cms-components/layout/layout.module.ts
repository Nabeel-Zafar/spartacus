import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots:{
        LandingPage2Template:{
          lg:{
            slots:[
              'StaticBannerSlot',
              'Section1',
              'Section2',
              'Section3',
              'Section5',
              'Section4']
          },
          slots:[
            'StaticBannerSlot',
            'Section1',
            'Section5',
            'Section4'
          ]
        }
      }
    }as LayoutConfig )
  ]
})
export class MyLayoutModule { }
