import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnChanges {
@Input({required:true}) bannerTitle='';
@Input() bannerOverView='';
@Input() key='3N84gAPPKXE';
private sanitizer=inject(DomSanitizer)
videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1`)
ngOnChanges(changes: SimpleChanges): void {
  if(changes['key']){
    this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1`)
  }
}
}
