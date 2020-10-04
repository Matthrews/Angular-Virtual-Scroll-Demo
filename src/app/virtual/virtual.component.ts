import { Component, OnInit,ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

personas = Array(500).fill(0);
  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
    
  }
cambio(){
  const total=this.viewport.measureScrollOffset();
  console.log("total",total)
  const posicion = this.viewport.getRenderedRange().start;
  console.log(posicion)
  console.log("personas " ,this.personas.length)
  if((posicion>this.personas.length/2)&&(posicion<this.personas.length/2+10)){
alert("has llegado casi a la mitad");
this.personas = Array(800).fill(0);
  }
}
}
