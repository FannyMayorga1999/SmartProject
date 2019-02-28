import { ServicesService } from './../services/services.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        RegisterRoutingModule, 
        FormsModule,
        HttpModule,
    ],
    declarations: [RegisterComponent],
    providers: [ServicesService]
})
export class RegisterModule {}
