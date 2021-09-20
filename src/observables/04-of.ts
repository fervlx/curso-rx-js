import { of } from 'rxjs';

//of is synchronous

//const obs$ = of<number>( 1,2,3,4,5,6 );
//const obs$ = of<number>( ...[1,2,3,4,5,6],7,8,9 );
const obs$ = of<any>( [1,2], {a:1,b:2}, function(){}, true, Promise.resolve( false ));


console.log(' init ');

obs$.subscribe({ 
    next: next => console.log(next),
    complete: () => console.log('completed')
});

console.log( 'end' );