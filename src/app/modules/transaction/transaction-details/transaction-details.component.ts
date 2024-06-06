import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit , OnDestroy{
  transactionSubscription: any;
  displayedColumns: string[] = ['id','date','comment'];
  dataSource = new MatTableDataSource<any>
  constructor(private transactionService: TransactionsService) {}
  ngOnInit() {
    this.transactionSubscription = this.transactionService.transaction$.subscribe(resp => {
      this.dataSource.data = [resp];
    });

  }

  updateDetail(){
    const payload = {
      Comments : this.dataSource.data[0].Comments
    };
    this.transactionService.UpdatedComments(this.dataSource.data[0].id, payload).subscribe((res) => {
      this.dataSource.data[0].Comments = res.Comments;
    })
    
  }
  ngOnDestroy() {
    if (this.transactionSubscription) {
      this.transactionSubscription.unsubscribe();
    }
  }

}
