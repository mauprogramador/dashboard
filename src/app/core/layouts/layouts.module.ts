import { ComponentsModule } from './../components/components.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GridComponent } from './grid/grid.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const IMPORTS = [
    MatToolbarModule,
    MaterialModule,
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonToggleModule,
    MatGridListModule,
    ComponentsModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
]


const COMPONENTS = [
    ToolbarComponent,
    SidenavComponent,
    GridComponent,
];


@NgModule({
  declarations: [COMPONENTS],
  imports: [IMPORTS],
  exports: [COMPONENTS],
})
export class LayoutsModule { }
