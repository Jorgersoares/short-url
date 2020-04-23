import { CopyPopupComponent } from './../copy-popup/copy-popup.component';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent{
  durationInSeconds = 4;
  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) {}
     
  onCopy(){
    this._snackBar.openFromComponent(CopyPopupComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
