import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MetabaseTokenService } from '../../services/metabase-token.service';


@Component({
  selector: 'app-list-students-score',
  imports: [],
  templateUrl: './list-students-score.component.html',
  styles: ``
})
export class ListStudentsScoreComponent implements OnInit {

  metabaseUrl!: SafeResourceUrl;

  constructor(
    private metabaseTokenService: MetabaseTokenService,
    private sanitizer: DomSanitizer
  ) {}


  ngOnInit(): void {
    this.metabaseTokenService.getMetabaseUrl(4).subscribe({
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
