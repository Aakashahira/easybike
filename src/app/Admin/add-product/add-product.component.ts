import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage'
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  uploadPercent : Observable<number>;
  downloadURL : Observable<string>;
  image : string;

  constructor(private storage : AngularFireStorage, private pService : ProductsService, private router : Router) { }

  ngOnInit() {
  }
 
  uploadPicture(event)
  {
    const file = event.target.files[0];
    const filepath = `test/${new Date().getTime()}_${file.name}`;
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
    productForm = new FormGroup({
    
      productID : new FormControl('',Validators.required),
      productName : new FormControl('',Validators.required),
      productPrice : new FormControl('',Validators.required),
      category : new FormControl('',Validators.required),
      productQuantity : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
      // image : new FormControl('',Validators.required)
  
    });
  
    onSubmit()
    {

      console.log(this.productForm.value,this.image);
         this.pService.insertProducts(this.productForm,this.image).then(
           () =>{
             alert("Product has been added successfully");
             this.router.navigate(['view-accessories']);
           }
         ).catch(
           ()=> {
             alert("There is some thing wrong... please Insert details again");
           }
         )
    }
       
  }


