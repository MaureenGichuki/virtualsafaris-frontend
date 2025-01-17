import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponents {

  constructor(
    public dialogRef: MatDialogRef< DialogComponents>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar
) { }

public showCopiedSnackBar() {        
    this._snackBar.open('Peer ID Copied!', 'Hurrah', {
    duration: 1000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}
}



export interface DialogData {
peerId?: string;
joinCall: boolean

}


