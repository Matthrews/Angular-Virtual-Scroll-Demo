import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css'],
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);
  constructor() {}

  ngOnInit(): void {}

  onScrolledIndexChange(): void {
    const total = this.viewport.measureScrollOffset();
    console.log('total', total);
    const pos = this.viewport.getRenderedRange().start;
    if (pos > this.personas.length / 2 && pos < this.personas.length / 2 + 10) {
      this.personas = Array(2000).fill(0);
    }
  }
}
