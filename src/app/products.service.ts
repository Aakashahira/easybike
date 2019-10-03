import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Observable } from 'rxjs';
import {Product} from './Models/product.Model'
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  Products : AngularFireList<any>;
  dealerBikes : AngularFireList<any>
  featuredBike : AngularFireList<any>
   acc: Observable<any>
   producrDetails : Observable<any>;
   myProducts = [];
   currentUser;
   brandedBikes;
   allDealerBikes;
   sellerBikes;
   featuredUsedBike;
  constructor(private db : AngularFireDatabase, private Afauth : AngularFireAuth) {
    this.acc = this.db.list('Products', ref => ref.limitToFirst(3)).snapshotChanges();
    // this.currentUser= Afauth.auth.currentUser.uid;
    console.log("current user Id:" + this.currentUser);
  }

   insertProducts(productForm,image)
   {
     this.Products = this.db.list('Products');
   return this.Products.push(
      {
        productID : productForm.value.productID,
        productName : productForm.value.productName, 
        productPrice: productForm.value.productPrice, 
        category : productForm.value.category,
        productQuantity : productForm.value.productQuantity,
        description : productForm.value.description,
       
        image : image,
        
      }
    )

   }
   getProducts()
   {
    this.Products= this.db.list('Products', ref => ref.limitToFirst(4));
    return this.Products.snapshotChanges(); 
   }
   getAllProducts()
   {
     this.Products = this.db.list('Products');
     return this.Products.snapshotChanges();
   }
   getFeaturedBikes()
   {
    this.featuredBike = this.db.list('dealerBike', ref => ref.limitToFirst(4));
    return this.featuredBike.snapshotChanges();
   }
   getAllFeaturedBikes()
   {
    this.featuredBike = this.db.list('dealerBike');
    return this.featuredBike.snapshotChanges();
   }
   getProductDetails(id : string)
   {
    //  let idd = "100"
    console.log("this id is :" + id);        
    return this.producrDetails =this.db.list('Products', ref => ref.orderByChild('productID').equalTo(id)).snapshotChanges()
    }
    getBikeDetails(id : string)
    {
      console.log("this id is :" + id);
      return this.producrDetails =this.db.list('dealerBike', ref => ref.orderByChild('productID').equalTo(id)).snapshotChanges();
    }
    getUsedBikeDetails(id : string)
    {
      console.log("this id is" + id);
      return this.db.list('sellerBike',ref => ref.orderByChild('productID').equalTo(id)).snapshotChanges();
    }
    getSelectedBrandBikes(brandId : string)
    {
      console.log("this id is: " + brandId);
      return this.brandedBikes = this.db.list('dealerBike', ref => ref.orderByChild('bikeBrand').equalTo(brandId));
    }
    myCurrentProducts(current_product)
    {
       this.myProducts.push(current_product);
    }
    getAllDealerBikes(Id : string)
    {
    return this.allDealerBikes = this.db.list('dealerBike',ref => ref.orderByChild('dealerId').equalTo(Id)).snapshotChanges();
    }
    getFeaturedUsedBikes()
    {
      this.featuredUsedBike = this.db.list('sellerBike', ref => ref.limitToFirst(4));
      return this.featuredUsedBike.snapshotChanges();
    }
    getAllFeaturedUsedBikes()
    {
      return this.db.list('sellerBike').snapshotChanges();
    }
    
    insertBikes(dealerProduct, image)
    {
     this.dealerBikes = this.db.list('dealerBike');
    return this.dealerBikes.push({
      productID : dealerProduct.value.productID,
      productName : dealerProduct.value.productName,
      bikePrice : dealerProduct.value.bikePrice,
      bikeBrand : dealerProduct.value.bikeBrand,
      productQuantity : dealerProduct.value.productQuantity,
      description :dealerProduct.value.description,
      Frame : dealerProduct.value.Frame,
      Displacement: dealerProduct.value.Displacement,
      Dimention : dealerProduct.value.Dimention,
      TyreFront : dealerProduct.value.TyreFront,
      clutch : dealerProduct.value.clutch,
      dryWeight : dealerProduct.value.dryWeight,
      starting : dealerProduct.value.starting,
      engine : dealerProduct.value.engine,
      PetrolCapacity : dealerProduct.value.PetrolCapacity,
      compressionRatio : dealerProduct.value.compressionRatio,
      groundClearance : dealerProduct.value.groundClearance,
      transmission : dealerProduct.value.transmission,
      image : image,
      dealerId : this.Afauth.auth.currentUser.uid
     });

    }

    removeThisBike(bike)
    {
      this.db.list('dealerBike/'+ bike.$key).remove().then(
        ()=> {
          alert("bike is removed");
        } 
      ).catch(
        ()=>{
          alert("Something went wrong");
        }
        
      )
    }
    insertOldBikes(sellerProduct, image)
    {
      this.sellerBikes = this.db.list('sellerBike');
      return this.sellerBikes.push({
         
        productID :   sellerProduct.value.productID,
        bikeName : sellerProduct.value.bikeName,
        bikePrice :sellerProduct.value.bikePrice,
        bikeBrand :sellerProduct.value.bikeBrand,
        description : sellerProduct.value.description,
        Frame : sellerProduct.value.Frame, 
        starting : sellerProduct.value.starting, 
        engine : sellerProduct.value.engine, 
        PetrolCapacity :sellerProduct.value.PetrolCapacity, 
        image : image,
        dealerId : this.Afauth.auth.currentUser.uid
      }).then(
        ()=> {
          alert("Product is added successfully");
        }
      ).catch(
        () => {
          alert("There is something error.. Please insert again");
        }
      )
    }
    }
     


