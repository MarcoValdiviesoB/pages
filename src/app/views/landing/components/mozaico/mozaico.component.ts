import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.html',
  styleUrls: ['./mozaico.component.scss']
})
export class NgbdModalContent {
  @Input() images;
  @Input() folder;
  @Input() indice;

  re = /_/g
  index = 0;

  constructor(public activeModal: NgbActiveModal) {
    document.getElementById("home-header").style["display"] = "none"
  }

  ngOnInit(){
    this.index = this.indice
    console.log(this.index)

  }

  ngOnDestroy(){
    document.getElementById("home-header").style["display"] = ""
  }

  nextIndex(sum = 1){
    this.index += sum
    if(this.index == this.images.length){
      this.index = 0;
    }
    else if(this.index == -1){
      this.index = this.images.length - 1
    }
  }
}

@Component({
  selector: 'app-mozaico',
  templateUrl: './mozaico.component.html',
  styleUrls: ['./mozaico.component.scss']
})
export class MozaicoComponent implements OnInit {

  @Input() proyecto

  open(i) {
      const modalRef = this.modalService.open(
        NgbdModalContent,
        Object.assign({}, { windowClass: 'modal-window'})
      );
      modalRef.componentInstance.images = this.proyecto.imagenes;
      modalRef.componentInstance.folder = this.proyecto.nombre;
      modalRef.componentInstance.indice = i
    }

  bgImage(img){
    const bgImg = 'url(/assets/images/'+this.proyecto.nombre+'/'+img+")"
    console.log(bgImg)
    return {"background-image": bgImg }
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
