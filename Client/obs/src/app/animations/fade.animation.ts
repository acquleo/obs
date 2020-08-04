import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', group([


            query(':enter', 
                [
                    style({
                        position: 'absolute',
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        transform: 'translateY(-100%)',
                      })
                ], 
                { optional: true }
            ),

            query(':leave', 
            [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 1,
                    transform: 'translateY(0)',
                  })
            ], 
            { optional: true }
        ),


        query(':leave', [
            animate('600ms ease', style({ opacity: 0, transform: 'translateY(100%)' })),
          ], 
          { optional: true }),

        query(':enter', [
                animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
              ], 
              { optional: true }),

            

        ]))

    ]);

    