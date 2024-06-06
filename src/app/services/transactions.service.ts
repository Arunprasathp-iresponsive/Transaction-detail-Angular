import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

export interface Transaction {
  id: string;
  date: number;
  sender: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    IDNumber: string;
  };
  recipient: {
    firstName: string;
    lastName: string;
    email: string;
    accountNumber: string;
    bank: string;
  };
  amount: number;
  currencyCd: string;
  comments: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactionSubject: BehaviorSubject<Transaction | null>;
  public transaction$: Observable<Transaction | null>;
  apiUrl = 'http://localhost:3000/';
  constructor(private http :HttpClient,
 
  ) {
    this.transactionSubject = new BehaviorSubject<Transaction | null>(null);
    this.transaction$ = this.transactionSubject.asObservable();
   }


  getTransaction(){
    return this.http.get(this.apiUrl + 'transaction/getAll')
  }

  updateTransaction(transaction: Transaction) {
    this.transactionSubject.next(transaction);
  }

  UpdatedComments(id: string, payload: { [key: string]: any }): Observable<any>{
    return this.http.patch(`${this.apiUrl}transaction/update/${id}`, payload);

  }
}
