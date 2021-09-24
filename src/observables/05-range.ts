import { range, asyncScheduler, observeOn } from 'rxjs';

//is synchronous

const src$ = range( 10, 5 ).pipe( observeOn( asyncScheduler ));
console.log('init');
src$.subscribe( console.log );
console.log('end');