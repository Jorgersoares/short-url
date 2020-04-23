import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlInputComponent } from './url-input/url-input.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { CopyPopupComponent } from './copy-popup/copy-popup.component';
import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressBarModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UrlInputComponent,
    ResultDialogComponent,
    CopyPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    ClipboardModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
  entryComponents: [
    ResultDialogComponent,
    CopyPopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
