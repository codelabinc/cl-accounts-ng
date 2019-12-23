import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { AppsService } from '../services/apps.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { Page } from 'app/model/page/page';
import { CollectionViewer } from '@angular/cdk/collections';
import { App } from '../model/app-model';

export class AppDataSource implements DataSource<App> {
    private usersSubject = new BehaviorSubject<App[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    totalElements = 0;

    constructor(private appService: AppsService) { }


    loadUsers(filter: any) {
        this.loadingSubject.next(true);

        this.appService.search(filter).pipe(
            map((data: Page<App>) => {
                console.log(data);
                this.totalElements = data.totalElements;
                return data.content;
            }),
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(users => {
                this.usersSubject.next(users)
            });
    }


    connect(collectionViewer: CollectionViewer): Observable<App[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }
}