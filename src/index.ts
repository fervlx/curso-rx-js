import { fromEvent } from 'rxjs';

/**
 * DOM Event
 */

const observer = {
    next: value => console.log( value ),
    complete: () => console.log( 'completed' )
};

const mouse$ = fromEvent<MouseEvent>( document, 'click' );
const keyboard$ = fromEvent<KeyboardEvent>( document, 'keyup' );


mouse$.subscribe( 
    ({ x,y }) => console.log( x, y )
);

keyboard$.subscribe( observer );