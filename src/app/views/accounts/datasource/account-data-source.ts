import { DataSource } from '@angular/cdk/table';
import { Account } from '../model/account';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AccountsService } from '../services/accounts.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize, map } from 'rxjs/operators';
import { Page } from 'app/model/page/page';

export class AccountDataSource implements DataSource<Account> {

    private accountsSubject = new BehaviorSubject<Account[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private accountsService: AccountsService) { }


    loadAccounts(filter: any) {
        console.log('in load accounts');
        this.loadingSubject.next(true);

        this.accountsService.search(filter).pipe(
            map((data: Page<Account>) => {
                console.log(data);
                return data.content;
            }),
            // catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(accounts => {
                console.log('subscription for accounts search');
                console.log(accounts);
                this.accountsSubject.next(accounts)
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<Account[]> {
        console.log("Connecting data source");
        return this.accountsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.accountsSubject.complete();
        this.loadingSubject.complete();
    }
}
