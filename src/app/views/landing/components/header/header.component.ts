import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {WINDOW_PROVIDERS, WINDOW} from "../../helpers/window.helpers";
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router'
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isFixed;
  toggled;
  public isCollapsed = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    public db:DatabaseService,
    private router:Router,
  ) {}

  ngOnInit() {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  cambiarIdioma(idioma){
    this.db.idioma = idioma
    console.log(this.db.idioma)
    this.router.navigateByUrl("")
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
  goToHome(){
    this.router.navigateByUrl("")
  }

  hidemenu() {
    this.isCollapsed = true;
  }
}
