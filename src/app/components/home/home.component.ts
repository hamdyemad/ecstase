import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import { GoodService } from '../../services/good.service';
import { Good } from '../../interfaces/good.interface';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Releases } from '../../interfaces/releases.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  newReleases: Releases[];
  goods: Good[];

  isDown: boolean = false;
  startX: number;
  scrollLeft: number;

  @ViewChild('releases', { static: true }) releases: ElementRef;
  @ViewChild('container', { static: true }) container: ElementRef;

  constructor(
    private goodService: GoodService,
    public translate: TranslateService) { }

  ngOnInit() {

    let releases = (this.releases.nativeElement as HTMLElement);

    releases.addEventListener('mousedown', e => {
      this.isDown = true;
      this.startX = e.pageX - releases.offsetLeft;
      this.scrollLeft = releases.scrollLeft;
    })

    releases.addEventListener('mouseleave', e => {
      this.isDown = false;
    })
    releases.addEventListener('mouseup', e => {
      this.isDown = false;
    })

    releases.addEventListener('mousemove', e => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - releases.offsetLeft;
      const walk = x - this.startX;
      releases.scrollLeft = this.scrollLeft - walk * 3;
    })

    this.getAllGoods();
    this.getAllReleases();
  }

  ngAfterViewInit() {
    let releases = (this.releases.nativeElement as HTMLElement),
      container = (this.container.nativeElement as HTMLElement);
    // remove Comment
    releases.childNodes.item(0).remove();

    releases.childNodes.forEach(release => {
      (release as HTMLElement).style.minWidth = `${(container.clientWidth - 60) / 3}px`;
      addEventListener('resize', () => {
        (release as HTMLElement).style.minWidth = `${(container.clientWidth - 60) / 3}px`;
      })
    })
  }

  getAllGoods() {
    this.goods = this.goodService.getAllGoods();
  }

  generateOtherGoods() {
    this.goodService.otherGoods.map(obj => {
      this.goods.push(obj);
    })
  }
  getAllReleases() {
    this.newReleases = this.goodService.getAllReleases();
  }

}
