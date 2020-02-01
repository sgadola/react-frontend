import React, {Component} from 'react';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';


export default class LearningComponent extends Component {

    render() {
        return (
            <div>
                My hello world.
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
            </div>
        )
    };
}
