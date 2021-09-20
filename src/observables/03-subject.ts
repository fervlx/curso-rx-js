import { interval, Observable, Observer, Subject } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( '[obs]', value ),
    error: error => console.warn( '[obs]', error ),
    complete: () => console.info( '[obs] completado')
};


const interval$ = new Observable<number>(
    subs => {
        const interval = setInterval( 
            () => subs.next( Math.random() ),
            1000            
        )

        return () => {
            clearInterval( interval );
        };
    }
);


// const subscribe = interval$.subscribe( observer );

// setTimeout( 
//     () => {
//         subscribe.unsubscribe();
//     },
//     8000
// );

/**
 * support broadcast
 * is an observer
 * support next, error and complete.
 * is a hot observable.
 */
const subject$ =  new Subject();
const subscription = interval$.subscribe( subject$ );

const subscribe1 = subject$.subscribe( observer );
const subscribe2 = subject$.subscribe( observer );

//subscribe1.add( subscribe2 );

setTimeout( 
    () => {
        //subscribe1.unsubscribe();
        subject$.next( 1565 );
        subject$.complete();

        //subject complete dont run @return of interval so
        // we need to call 
        subscription.unsubscribe()
    },
    8000
);