import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  logoData: any = {
    width: '200',
    height: '200',
    logoName: 'Mean Stack',
    logoUrl: '',
    logoImgPath: 'assets/image/1.png',
    class: 'footer-class'
  }

  ngOnInit() {
  }

}
