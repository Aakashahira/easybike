import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AccessoriesDescriptionComponent } from './accessories-description/accessories-description.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './checkout.guard';
import { MyOrderComponent } from './my-order/my-order.component';
import { DealerRegistrationComponent } from './dealer-registration/dealer-registration.component';
import { DealerAddBikesComponent } from './dealer-add-bikes/dealer-add-bikes.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { BuyAccessoriesComponent } from './buy-accessories/buy-accessories.component';
import { NewbikesComponent } from './newbikes/newbikes.component';
import { UsedBikesComponent } from './used-bikes/used-bikes.component';
import { NewBikesDescriptionComponent } from './new-bikes-description/new-bikes-description.component';
import { BikeByBrandComponent } from './bike-by-brand/bike-by-brand.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { SellOldBikeComponent } from './sell-old-bike/sell-old-bike.component';
import { UsedBikeDescriptionComponent } from './used-bike-description/used-bike-description.component';
import { AdminViewAccessoriesComponent } from './Admin/admin-view-accessories/admin-view-accessories.component';
import { AdminViewUsersComponent } from './Admin/admin-view-users/admin-view-users.component';
import { AdminViewDealersComponent } from './Admin/admin-view-dealers/admin-view-dealers.component';
import { AdminViewOrdersComponent } from './Admin/admin-view-orders/admin-view-orders.component';
import { ViewUsedBikesComponent } from './Admin/view-used-bikes/view-used-bikes.component';
import { ViewNewBikesComponent } from './Admin/view-new-bikes/view-new-bikes.component';


const routes: Routes = [
 
//   {
//     path : 'dashboard', component : DashboardComponent  
//  },
//  {
//    path : 'AddProduct', component : AddProductComponent
//  },
{
path : '', component : HomeComponent
},
 {
  path : 'home', component : HomeComponent
},
{
  path : 'productdescription' , component : ProductDescriptionComponent
},
{
  path : 'accessoriesdescripton/:id', component : AccessoriesDescriptionComponent
},
{
  path : 'newbikesdescription/:id',component : NewBikesDescriptionComponent
},
{
  path : 'newbikes/:id',component : BikeByBrandComponent
},
{
path : 'usedbikesdescription/:id',component : UsedBikeDescriptionComponent
},
{
  path : 'shopping-cart', component : ShoppingCartComponent
},
{
  path : 'userSignup', component : UserRegistrationComponent
},
{
  path : 'dealerSignup', component : DealerRegistrationComponent
},
{
  path : 'login',  component :LoginComponent
},
{
  path : 'adminpanel' , children : [
{
  path : '', component : AdminPanelComponent
},
{
  path : 'dashboard', component : DashboardComponent
},
{
  path : 'AddProduct', component : AddProductComponent
},
{
  path : 'view-accessories', component : AdminViewAccessoriesComponent
},
{
path : 'view-customers', component : AdminViewUsersComponent
},
{
path : 'view-dealers', component : AdminViewDealersComponent
},
{
  path : 'view-orders', component : AdminViewOrdersComponent
},
{
  path : 'view-used-bikes', component : ViewUsedBikesComponent
},
{
  path : 'view-new-bikes', component : ViewNewBikesComponent
}
  ]},
  
  // component : AdminPanelComponent


  // path : 'adminpanel/dashboard', component : DashboardComponent


{
  path : 'myCart', component : ShoppingCartComponent
},
{
  path : 'checkout', component : CheckoutComponent, canActivate :[CheckoutGuard]
},
{
  path : 'myorder', component : MyOrderComponent
},
{
  path : 'add-new-bike', component : DealerAddBikesComponent
},
{
  path : 'order-success', component : OrderSuccessComponent
},
{
  path : 'accessories', component : BuyAccessoriesComponent
},
{
  path : 'newbikes', component : NewbikesComponent
},
{
  path : 'usedbikes', component : UsedBikesComponent
},
{
  path : 'dealerManageBikes', component : DealerDashboardComponent
},
{
  path : 'sell-old-bikes', component : SellOldBikeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
