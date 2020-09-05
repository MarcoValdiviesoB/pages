import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  instaFotos  = [
    "https://instagram.fscl14-1.fna.fbcdn.net/v/t51.2885-15/e15/c0.74.720.720a/s320x320/117427401_334017924434645_580361237761696850_n.jpg?_nc_ht=instagram.fscl14-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pKFWeNu4H7MAX_in0ln&oh=73468f98b15f61614e2f94161304597f&oe=5F776FAD",
    "https://instagram.fscl14-1.fna.fbcdn.net/v/t51.2885-15/e15/c87.0.905.905a/s320x320/118198244_2733668446910341_2075488130424386921_n.jpg?_nc_ht=instagram.fscl14-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=dY_LJqvTMXoAX-EW41D&oh=9c6ae4dcb885293832e7083ceef3c99d&oe=5F7A431D",
    "https://instagram.fscl14-1.fna.fbcdn.net/v/t51.2885-15/e15/c87.0.905.905a/s320x320/118077329_157353012647782_5132511209721079859_n.jpg?_nc_ht=instagram.fscl14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QE3MqSKREy0AX8Lqiju&oh=ed42b52d73ac5ddaf6668226ec8f24db&oe=5F7730A1",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
