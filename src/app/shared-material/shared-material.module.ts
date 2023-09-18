import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatButtonToggleModule],
  exports: [MatButtonModule, MatButtonToggleModule],
})
export class SharedMaterialModule {}
