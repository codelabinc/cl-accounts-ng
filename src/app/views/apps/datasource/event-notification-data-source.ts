import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { CollectionViewer } from '@angular/cdk/collections';
import { App, EventNotification } from '../model/app-model';
import { MasterRecordService } from 'app/services/master-record.service';

export class EventNotificationDataSource implements DataSource<EventNotification> {
    private dataSubject = new BehaviorSubject<EventNotification[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    totalElements = 0;

    constructor(private masterRecordService: MasterRecordService) { }


    loadUsers(filter: any) {
        this.loadingSubject.next(true);

        this.masterRecordService.getEventNotificationTypes().pipe(
            map((data:EventNotification[]) => {
                this.totalElements = data.length;
                return data;
            }),
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(data => {
            this.dataSubject.next(data)
        });
    }


    connect(collectionViewer: CollectionViewer): Observable<EventNotification[]> {
        return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.dataSubject.complete();
        this.loadingSubject.complete();
    }
}