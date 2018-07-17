import React, {Component} from 'react';

// this is array with adresses of background pictures
const imgUrl = [

    "/static/media/a.728992e7.jpg",
    "/static/media/b.303a5d13.jpg",
    "/static/media/c.4b0927c1.jpg",
    "/static/media/d.b7474da5.jpg"
];

// this is function returning div with background image which is slider photo

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

// this is component of Slider

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    };

    // here is function which is changing current index need to change the picture in slideshow
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
        return (
            <div className="slider">
                <ImageSlide url = { imgUrl[this.state.currentIndex] }/>
            </div>
        );
    }
}


export {Slider}