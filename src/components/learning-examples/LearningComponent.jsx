import React, { Component } from 'react';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';


class LearningComponent extends Component {

    render() {
        return (
            <div>
                My hello World.
                <FirstComponent></FirstComponent>
                <SecondComponent></SecondComponent>
                <ThirdComponent></ThirdComponent>
            </div>
        )
    };
}


export default LearningComponent;