import React, {Component} from 'react';
import a from '../src/Images/a.jpg';
import b from '../src/Images/b.jpg';
import c from '../src/Images/c.jpg';
import d from '../src/Images/d.jpg';

const imgUrl = [

    "/static/media/a.728992e7.jpg",
    "/static/media/b.303a5d13.jpg",
    "/static/media/c.4b0927c1.jpg",
    "/static/media/d.b7474da5.jpg"
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
            current %= 4;
            this.setState ({
                currentIndex: current
            })
        }, 2000);
    }

    render() {
        console.log({c}, {d});
        return (
            <div className="slider">
                <ImageSlide url = { imgUrl[this.state.currentIndex] }/>
            </div>
        );
    }
}


export {Slider}