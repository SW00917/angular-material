import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.title = 'constructor';

    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/angular_solidBlack.svg'
      )
    );

    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit() {
    this.title = 'ngOnInit';

    // this.matIconRegistry.addSvgIconInNamespace(
    //   'custom-svg',
    //   'angular',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     'assets/images/angular_solidBlack.svg'
    //   )
    // );
  }
}
