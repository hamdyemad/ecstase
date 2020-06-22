import { Injectable } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { Releases } from '../interfaces/releases.interface';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  goods: Good[] = [
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 0 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
  ]
  otherGoods: Good[] = [
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 0 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
    { img: "../../assets/images/home/products/product1.jpg", productName: "name", quantity: 20, left: 8 },
  ]

  releases: Releases[] = [
    {
      relativeImg: "../../assets/images/home/new-release/product1/relative.webp",
      absoluteImg: "../../assets/images/home/new-release/product1/absolute.webp",
      releaseName: "synthetic", left: 0
    },
    {
      relativeImg: "../../assets/images/home/new-release/product1/relative.webp",
      absoluteImg: "../../assets/images/home/new-release/product1/absolute.webp",
      releaseName: "synthetic", left: 0
    },
    {
      relativeImg: "../../assets/images/home/new-release/product1/relative.webp",
      absoluteImg: "../../assets/images/home/new-release/product1/absolute.webp",
      releaseName: "synthetic", left: 0
    },
    {
      relativeImg: "../../assets/images/home/new-release/product1/relative.webp",
      absoluteImg: "../../assets/images/home/new-release/product1/absolute.webp",
      releaseName: "synthetic", left: 0
    },
    {
      relativeImg: "../../assets/images/home/new-release/product1/relative.webp",
      absoluteImg: "../../assets/images/home/new-release/product1/absolute.webp",
      releaseName: "synthetic", left: 0
    },
    {
      relativeImg: "../../assets/images/home/new-release/product1/relative.webp",
      absoluteImg: "../../assets/images/home/new-release/product1/absolute.webp",
      releaseName: "synthetic", left: 0
    },
  ]
  constructor() { }

  getAllGoods() {
    return this.goods;
  }

  getAllReleases() {
    return this.releases;
  }



}
