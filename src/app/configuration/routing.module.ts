import { NgModule } from '@angular/core';
import {ConfigModule, RoutingConfig} from "@spartacus/core";


@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      routing:{
        routes :{
          product:{
            paths: [
              'cameras/:productCode/:manufacturer/:name',
              'cameras/:productCode/:name',
              'cameras/:productCode'
            ],
          }
        }
      }
    } as RoutingConfig)
  ]
})
export class CustomRoutingModule { }


