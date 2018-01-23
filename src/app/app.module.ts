import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ApiService } from './services/api.service';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { CheckedOutBooksComponent } from './components/checked-out-books/checked-out-books.component';
import { BooksComponent } from './components/books/books.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch : 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'checkedOut', component: CheckedOutBooksComponent},
  { path: 'books', component: BooksComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    CheckedOutBooksComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
