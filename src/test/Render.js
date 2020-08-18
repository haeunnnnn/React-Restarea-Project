import React, { Component } from 'react'
import First from './Firtst';
import Second from './Second';

export default class Render extends Component {
    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    render() {
        const { step } = this.state;

        switch (step) {
            case 1 :
                return (
                    <First nextStep = {this.nextStep} />
            );
            case 2 :
                return (
                    <Second />
            );    

        }
    }
}
