import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OBStatusComponent } from './ob-status.component';
import { StatModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { OBStatusRoutingModule } from './ob-status-routing.module';

@NgModule({
    imports: [
        CommonModule,
        OBStatusRoutingModule,
        StatModule,
        NgbModule,
        FormsModule
    ],
    declarations:[OBStatusComponent]
})
export class OBStatusModule {


    


}
