import React from 'react';
import { BicyclestoreServiceConsumer } from '../bicyclestore-service-context';

const withBicyclestoreService = () => Wrapped => {

    return (props) => {
        return (
            <BicyclestoreServiceConsumer>
                {
                    (bicyclestoreService ) => {
                        return (<Wrapped {...props}
                            bicyclestoreService  = { bicyclestoreService  } />
                        )
                    }
                }
            </BicyclestoreServiceConsumer>
        )
    }
}

export default withBicyclestoreService;