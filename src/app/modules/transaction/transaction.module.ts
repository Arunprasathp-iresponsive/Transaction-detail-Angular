import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'transaction-list',
  },
  {
    path: 'transaction-list',
    component: TransactionListComponent
  },
  {
    path: 'transaction-detail',
    component: TransactionDetailsComponent
  }

];

@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionModule { }
