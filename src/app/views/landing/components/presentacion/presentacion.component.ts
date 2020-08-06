import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent implements OnInit {

  constructor( public db:DatabaseService) { }

  ngOnInit(): void {
  }

}
