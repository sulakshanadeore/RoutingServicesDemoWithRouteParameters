import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  Prodid: string
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.Prodid = this.route.snapshot.paramMap.get('Prodid');
    alert(this.Prodid);
if ((parseInt(this.Prodid)>5) && parseInt(this.Prodid)<15)
{
alert("Prices are different for these...");

}

  }
}
