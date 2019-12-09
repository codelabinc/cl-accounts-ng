import { DataSource } from '@angular/cdk/table';
import { PortalUser } from '../model/user-model';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { PortalUserService } from '../services/portal-user.service';
import { map, finalize, catchError } from 'rxjs/operators';
import { Page } from 'app/model/page/page';
import { CollectionViewer } from '@angular/cdk/collections';
export class UserDataSource implements DataSource<PortalUser> {

    private usersSubject = new BehaviorSubject<PortalUser[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    totalElements = 0;

    constructor(private portalUserService: PortalUserService) { }


    loadUsers(filter: any) {
        this.loadingSubject.next(true);

        this.portalUserService.search(filter).pipe(
            map((data: Page<PortalUser>) => {
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


    connect(collectionViewer: CollectionViewer): Observable<PortalUser[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }
}
