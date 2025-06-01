import { Component, OnInit, HostListener } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MetabaseTokenService } from '../../services/metabase-token.service';

@Component({
  selector: 'app-icfes-1',
  imports: [],
  templateUrl: './icfes-1.component.html',
  styles: ``
})
export class Icfes1Component implements OnInit{

  metabaseUrl!: SafeResourceUrl;
  isFotterVisible: boolean = false;

  constructor(
    private metabaseTokenService: MetabaseTokenService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.metabaseTokenService.getMetabaseUrl(2).subscribe({
      next: (res) => {
        this.metabaseUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.iframeUrl);
        console.log(this.metabaseUrl)
      },
      error: (err) => {
        console.error('Error fetching Metabase URL:', err);
      }
    });
  }

}
