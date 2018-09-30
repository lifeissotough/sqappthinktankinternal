import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverBookRoutingModule } from './overbook-routing.module';
import { OverBookComponent } from './overbook.component';
import { StatModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OverBookRoutingModule,
        StatModule,
        NgbModule,
        FormsModule
    ],
    declarations:[OverBookComponent]
})
export class OverBookModule {}
