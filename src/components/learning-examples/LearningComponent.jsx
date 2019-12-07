import React, {Component} from 'react';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';


export default class LearningComponent extends Component {

    render() {
        return (
            <div>
                My hello World.
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
            </div>
        )
    };
}
