import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Translate } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @ViewChild('links', { static: true }) links: ElementRef;
  @ViewChild('burger', { static: true }) burger: ElementRef;
  isShow: boolean = false;
  currentLang: string;
  mobileMedia = matchMedia('(max-width: 991px)');
  pcMedia = matchMedia('(min-width: 992px)');

  constructor(public translateServ: Translate, public translateService: TranslateService) { }

  ngOnInit() {
    this.translateServ.translateFn();

    addEventListener('resize', () => {
      if (this.pcMedia.matches) {
        (this.links.nativeElement as HTMLElement).style.clipPath = 'none';
        this.isShow = false;
        (this.burger.nativeElement as HTMLElement).classList.remove('active-burger');
      }
      else if (this.mobileMedia.matches) {
        (this.links.nativeElement as HTMLElement).style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
      }
    })
  }

  upperNav(number: number) {
    return new Array(number)
  }

  // Use Lang FN
  changeTranslate(value: string) {
    this.translateServ.translateUse(value);
    localStorage.setItem('translate', value);
  }

  toggleNavbar(burger: HTMLElement, links: HTMLElement) {
    this.isShow = !this.isShow;

    if (this.isShow == true) {
      burger.classList.add('active-burger');
      links.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    } else {
      burger.classList.remove('active-burger');
      links.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
    }
  }

}
