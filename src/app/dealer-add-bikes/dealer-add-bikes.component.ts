import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-add-bikes',
  templateUrl: './dealer-add-bikes.component.html',
  styleUrls: ['./dealer-add-bikes.component.css']
})
export class DealerAddBikesComponent implements OnInit {

  uploadPercent : Observable<number>;
  downloadURL : Observable<string>;
  image : string;
  constructor(private storage : AngularFireStorage, private pService : ProductsService, private router : Router) { }

  ngOnInit() {
  }
  uploadPicture(event)
  {
    const file = event.target.files[0];
    const filepath = `dealer_bikes/${new Date().getTime()}_${file.name}`;;
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
    dealerProductForm =  new FormGroup({
      
      productID : new FormControl('',Validators.required),
      productName : new FormControl('',Validators.required),
      bikePrice : new FormControl('',Validators.required),
      bikeBrand : new FormControl('',Validators.required),
      productQuantity : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
     
          Frame : new FormControl('',Validators.required),
          Displacement: new FormControl('',Validators.required),
          Dimention : new FormControl('',Validators.required), 
          TyreFront : new FormControl('',Validators.required),
          clutch : new FormControl('',Validators.required),
          dryWeight : new FormControl('',Validators.required),
          starting : new FormControl('',Validators.required),
          engine : new FormControl('',Validators.required),
          PetrolCapacity : new FormControl('',Validators.required),
          compressionRatio : new FormControl('',Validators.required),
          groundClearance : new FormControl('',Validators.required),
          transmission : new FormControl('',Validators.required)
       
    
    }); 

    onSubmit()
    {
      console.log(this.dealerProductForm.value);
      // console.log(this.dealerProductForm.value.bikeSpecification.value.Frame);
      this.pService.insertBikes(this.dealerProductForm,this.image).then
      (
        ()=> {
          alert("Product is successfully added");
          this.router.navigate(['dealerManageBikes']);
        }
      ).catch(
        () => {
          alert("Product adding failed... Please Insert again");
        }
      )
    }
}
