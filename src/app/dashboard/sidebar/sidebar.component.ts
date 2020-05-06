import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2,  Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild("side",{static: true}) side:ElementRef;

  constructor(private render: Renderer2, private userService: UserService, private router: Router) { }

  @Output() closeMenu = new EventEmitter();

  ngOnInit() {
  }
  closeSide(){
    this.render.addClass(this.side.nativeElement,'closed');
  }
  openSide(){
    this.render.removeClass(this.side.nativeElement,'closed');
  }

  onClose(){
    this.closeMenu.emit();
  }

  logOut(){
    this.userService.logoutUser();
    this.userService.onCheckUser();
    this.router.navigate(['/login']);

  }

}
