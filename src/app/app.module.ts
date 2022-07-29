import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxImageEditorModule } from 'ngx-image-editor';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgxImageEditorModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent, //,
    //  , ImagesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
