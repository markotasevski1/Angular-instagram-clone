import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    SuccessDialogComponent,
    ErrorDialogComponent,
    ButtonsComponent,
    QuestionComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  exports: [
    AngularMaterialModule,
    ErrorDialogComponent,
    ButtonsComponent,
    ReactiveFormsModule,
    FormsModule,
    SuccessDialogComponent,
    QuestionComponent,
  ],
})
export class SharedModule {}
