import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from  './Admin/navbar/navbar.component'
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { AbcComponent } from './abc/abc.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import {AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbaarComponent } from './navbaar/navbaar.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { BuyBikeByBrandComponent } from './buy-bike-by-brand/buy-bike-by-brand.component';
import { FeaturedUsedBikesComponent } from './featured-used-bikes/featured-used-bikes.component';
import { LatestAccessoriesComponent } from './latest-accessories/latest-accessories.component';
import { FeaturedNewBikesComponent } from './featured-new-bikes/featured-new-bikes.component';
import { AccessoriesDescriptionComponent } from './accessories-description/accessories-description.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AuthService } from './auth.service';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component'
import { ProductsService } from './products.service';
import { ShoppingCartService } from './shopping-cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './checkout.guard';
import { MyOrderComponent } from './my-order/my-order.component';
import { CheckOutService } from './check-out.service';
import { DealerRegistrationComponent } from './dealer-registration/dealer-registration.component';
import { DealerAddBikesComponent } from './dealer-add-bikes/dealer-add-bikes.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { BuyAccessoriesComponent } from './buy-accessories/buy-accessories.component';
import { NewbikesComponent } from './newbikes/newbikes.component';
import { UsedBikesComponent } from './used-bikes/used-bikes.component';
import { NewBikesDescriptionComponent } from './new-bikes-description/new-bikes-description.component';
import { BikeByBrandComponent } from './bike-by-brand/bike-by-brand.component';
import { SliderForAllComponent } from './slider-for-all/slider-for-all.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { SellOldBikeComponent } from './sell-old-bike/sell-old-bike.component';
import { UsedBikeDescriptionComponent } from './used-bike-description/used-bike-description.component';
import { AdminViewAccessoriesComponent } from './Admin/admin-view-accessories/admin-view-accessories.component';
import { AdminViewUsersComponent } from './Admin/admin-view-users/admin-view-users.component';
import { AdminViewDealersComponent } from './Admin/admin-view-dealers/admin-view-dealers.component';
import { AdminViewOrdersComponent } from './Admin/admin-view-orders/admin-view-orders.component';
import { ViewUsedBikesComponent } from './Admin/view-used-bikes/view-used-bikes.component';
import { ViewNewBikesComponent } from './Admin/view-new-bikes/view-new-bikes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AbcComponent,
    DashboardComponent,
    AddProductComponent,
    NavbaarComponent,
    HomeComponent,
    SliderComponent,
    BuyBikeByBrandComponent,
    FeaturedUsedBikesComponent,
    LatestAccessoriesComponent,
    FeaturedNewBikesComponent,
    AccessoriesDescriptionComponent,
    LoginComponent,
    ProductDescriptionComponent,
    RelatedProductsComponent,
    ShoppingCartComponent,
    UserRegistrationComponent,
    AdminPanelComponent,
    CheckoutComponent,
    MyOrderComponent,
    DealerRegistrationComponent,
    DealerAddBikesComponent,
    OrderSuccessComponent,
    BuyAccessoriesComponent,
    NewbikesComponent,
    UsedBikesComponent,
    NewBikesDescriptionComponent,
    BikeByBrandComponent,
    SliderForAllComponent,
    DealerDashboardComponent,
    SellOldBikeComponent,
    UsedBikeDescriptionComponent,
    AdminViewAccessoriesComponent,
    AdminViewUsersComponent,
    AdminViewDealersComponent,
    AdminViewOrdersComponent,
    ViewUsedBikesComponent,
    ViewNewBikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService,ProductsService,ShoppingCartService,CheckoutGuard,CheckOutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
