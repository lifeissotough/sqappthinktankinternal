import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OBStatusComponent } from './ob-status.component';

const routes: Routes = [
    {
        path: '', component: OBStatusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OBStatusRoutingModule {
}
