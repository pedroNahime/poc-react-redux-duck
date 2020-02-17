import React from 'react'
import { cleanup, render } from '@testing-library/react'
import {User} from "../user.component";

describe('<User component/>', () => {
    let props;
    beforeEach(() => {
        props = {
            getUser: jest.fn(),
            user:
                {
                    name:{
                        first: 'Helene'
                    }
                }
        }
    });
    afterEach(cleanup);
    test('Render the Component', () =>{
        const {container} = render(<User {...props}/>);
        expect(container).toMatchSnapshot()
    })
});