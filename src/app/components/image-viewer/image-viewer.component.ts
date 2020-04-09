import { Component, Input, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  @Input() img: any;

  styles: any;


  constructor() {
  }

  ngOnInit(): void {
    $(document).ready(() => {

    });
  }


  onMouseMove($event: MouseEvent, outerDiv: HTMLDivElement, innerImg: HTMLImageElement) {
    const bounds = outerDiv.getBoundingClientRect();
    const posX = $event.clientX - bounds.left + 10;
    const posY = $event.clientY - 2.5 * outerDiv.offsetHeight;
    outerDiv.style.height = innerImg.height.toString() + 'px';

    this.styles = {
      left: posX + 'px',
      top: posY + 'px',
      display: 'block'

    };
  }

  onMouseLeave() {
    this.styles = {
      left: 0,
      top: 0,
      display: 'none'

    };
  }

  openBlank(event) {
    window.open(event.target.src, '_blank');
  }
}
