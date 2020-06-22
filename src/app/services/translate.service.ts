import { Injectable, OnInit } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class Translate {


  translateLang: Array<string>;
  currentLang: string;
  constructor(private translate: TranslateService) { }


  translateFn() {
    // Start Translate Service
    this.currentLang = localStorage.getItem('translate');
    this.translate.use(this.currentLang);
    this.translate.addLangs(['en', 'ar']);
    this.translateLang = this.translate.getLangs();


    this.translate.onLangChange.subscribe(translate => {
      let link = document.getElementById('translate');
      let arabicLink = document.getElementById('arabic');
      let html = document.getElementsByTagName('html')[0];
      if (translate.lang == 'en') {
        link.setAttribute('href', '../../../assets/bootstrap-4.2.1-rtl/dist/css/bootstrap.min.css');
        html.setAttribute('dir', 'ltr');
        arabicLink.removeAttribute('href');
      }
      if (translate.lang == 'ar') {
        link.removeAttribute('href');
        link.setAttribute('href', '../../../assets/bootstrap-4.2.1-rtl/dist/css/rtl/bootstrap.min.css');
        html.setAttribute('dir', 'rtl');
        arabicLink.setAttribute('href', '../../assets/scss_files/_style-rtl.css');
      }
    })
    // End Translate Service
  }

  translateUse(value: string) {
    this.translate.use(value);
  }

}
