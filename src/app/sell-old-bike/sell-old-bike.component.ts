import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { ProductsService } from '../products.service';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-old-bike',
  templateUrl: './sell-old-bike.component.html',
  styleUrls: ['./sell-old-bike.component.css']
})
export class SellOldBikeComponent implements OnInit {
  uploadPercent : Observable<number>;
  downloadURL : Observable<string>;
  image : string;
  constructor(private storage : AngularFireStorage, private pService : ProductsService) { }

  ngOnInit() {
  }
  uploadPicture(event)
  {
    const file = event.target.files[0];
    const filepath = `seller_bikes/${new Date().getTime()}_${file.name}`;;
    const fref = this.storage.ref(filepath);
    const task = fref.put(file);
       this.uploadPercent = task.percentageChanges();
       task.snapshotChanges().pipe(
             finalize(() =>{ this.downloadURL = fref.getDownloadURL()
             this.downloadURL.subscribe(
              url =>(this.image = url,
              console.log("image is" + this.image) )
             );
             
             }
             
             )).subscribe()
    }
    sellerProductForm =  new FormGroup({
      
      productID : new FormControl('',Validators.required),
      bikeName : new FormControl('',Validators.required),
      bikePrice : new FormControl('',Validators.required),
      bikeBrand : new FormControl('',Validators.required),
     
      description : new FormControl('',Validators.required),
     
          Frame : new FormControl('',Validators.required),
          starting : new FormControl('',Validators.required),
          engine : new FormControl('',Validators.required),
          PetrolCapacity : new FormControl('',Validators.required),
         
       
    
    }); 

    onSubmit()
    {
      console.log(this.sellerProductForm.value);
      // console.log(this.dealerProductForm.value.bikeSpecification.value.Frame);
      this.pService.insertOldBikes(this.sellerProductForm,this.image);
    }
}
