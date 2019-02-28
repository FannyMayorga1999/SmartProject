import { HttpModule } from '@angular/http';
import { ServicesService } from './../services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { ProfilepictureService } from '../services/profile/profilepicture.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, HttpModule],
    declarations: [],
    providers: [ServicesService,LoginComponent]
})
export class LoginModule {}

//ProfilepictureService
