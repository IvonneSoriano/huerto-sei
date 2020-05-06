import { element } from 'protractor';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @ViewChild('sidebar', {static:true}) sidebar: ElementRef;
    @ViewChild('panel', {static:true}) panel: ElementRef;
    private counter: number = 1;
    protected isClosed : boolean = false;

    constructor(private render: Renderer2) { }
  ngOnInit() {
  }

  toggleSidebar(side){
    console.log(`El contador de toggle es ${this.counter}`);
    if(this.counter%2 === 0){
      side.openSide();
      this.render.removeClass(this.sidebar.nativeElement, 'closed');
    this.render.removeClass(this.panel.nativeElement, 'closed');
    this.isClosed = false;
    
    
    }
    else{
      this.render.addClass(this.sidebar.nativeElement, 'closed');
      this.render.addClass(this.panel.nativeElement, 'closed');
      this.isClosed = true;
      side.closeSide();
    }
    this.counter++;
  }

}
