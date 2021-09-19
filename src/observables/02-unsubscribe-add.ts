import { interval, Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( '[obs]', value ),
    error: error => console.warn( '[obs]', error ),
    complete: () => console.info( '[obs] completado')
};


const interval$ = new Observable<number>( 
    subs => {
        let count : number = 0;
        
        const interval = setInterval( 
            () => {
                count++;
                subs.next( count );
            },
            1000
        );

        setTimeout( () => {
            subs.complete(); // call unsubscribe and run clearInternal
        }, 3000)
        
        return () => {
            console.log( 'cleaning internal');
            clearInterval( interval );
        }
    }
);

const subscription1 = interval$.subscribe( observer );
const subscription2 = interval$.subscribe( observer );
const subscription3 = interval$.subscribe( observer );

subscription1.add( subscription2 )
subscription1.add( subscription3 );

setTimeout( () => {
 subscription1.unsubscribe();
 console.log( ' completed timeout ');
}, 5000 );
//interval$.subscribe( console.log );