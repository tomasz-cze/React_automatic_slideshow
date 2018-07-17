import React, {Component} from 'react';
import a from '../src/Images/a.jpg';
import b from '../src/Images/b.jpg';
import c from '../src/Images/c.jpg';
import d from '../src/Images/d.jpg';

const imgUrl = [
    {a},
    {b},
    {c},
    {d}
];

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
};

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    };

    componentDidMount () {
        let timeID= setInterval( ()=> {
            let current = this.state.currentIndex;
            // current = current +1
            current += 1;
            // current = current % 4
            current %= 3;
            this.setState ({
                currentIndex: current
            })
        }, 4000);
    }

    render() {
        return (
            <div className="slider">
                <ImageSlide url = { imgUrl[this.state.currentIndex] }/>
            </div>
        );
    }
}


export {Slider}