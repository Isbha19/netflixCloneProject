import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  auth = inject(AuthService);
  @Input({required:true}) userImage:string=''
  @Input({required:true}) userName:string=''
 navList=["Home","TV shows","News & Porpular","My List","Browse by Language"]
 signOut(){
  this.auth.signOut();
 }
}
