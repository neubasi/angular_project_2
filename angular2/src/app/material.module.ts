import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule , MatListModule, MatTabsModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule , MatListModule, MatTabsModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule , MatListModule, MatTabsModule, MatInputModule],
})
export class MaterialModule { }