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
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';


const IMPORTS = [
    MatToolbarModule,
    MaterialModule,
    CommonModule,
    RouterModule,
    MatListModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatGridListModule,
    ComponentsModule,
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
