import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos = []

  headTo(video){
    this.router.navigateByUrl("/fichas/video")
  }

  constructor( private db:DatabaseService , private router:Router) {
    this.videos = Object.keys(db.metrajes[db.idioma])
  }

  ngOnInit(): void {
  }

}
