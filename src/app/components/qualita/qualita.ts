import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-qualita',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './qualita.html',
  styleUrl: './qualita.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Qualita {

}
