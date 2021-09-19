import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( '[obs]', value ),
    error: error => console.warn( '[obs]', error ),
    complete: () => console.info( '[obs] completado')
};


const obs$ = new Observable<string>(
    subs => {
        subs.next("hola");
        subs.next("mundo");

        // var a;
        // a.name = 'sssxxx';

        subs.complete();
        subs.next("mundo");
    }
);

obs$.subscribe({
    next:  ( value )  => console.log( value ),
    error: ( error )  => console.warn( error ),
    complete: () => console.log( 'completed' )
});

obs$.subscribe( observer );

console.log('hey!');