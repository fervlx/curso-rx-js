import { interval, timer } from 'rxjs';

// are async

const observer = {
    next: val => console.log( 'next', val ),
    complete: () => console.log('completed')
};

//const interval$ = interval( 1000 );
//const timer$ = timer( 2000, 1000 ); // init sequence in 2 seconds.

const date = new Date();
date.setSeconds( date.getSeconds() + 10 );

const timer$ = timer( date );


console.log('init');
timer$.subscribe( observer );
console.log('end');