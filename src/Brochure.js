import React, {Component} from 'react';
import {TransitionMotion, spring} from 'react-motion';
import anime from 'animejs';
import Swipeable from './Swipeable';
import brochure_pages from './brochure_list';
import './Brochure.css';

const THREE = require('three');
window.THREE = THREE;
require('three/examples/js/renderers/CSS3DRenderer');

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <div className="controls-next">
                    <button onClick={this.props.onNext} className="ControlButton Controls-nextButton"></button>
                </div>
                <div className="controls-prev">
                    <button onClick={this.props.onPrev} className="ControlButton Controls-prevButton"></button>
                </div>
            </div>
        )
    }
}

class Slide extends Component {
    render() {
        return (
            <div className="BrochureSlide">
                <Controls onNext={this.props.onNext} onPrev={this.props.onPrev}/>
                <Pages show={brochure_pages[this.props.current]}/>
            </div>
        )
    }
}

class Brochure extends Component {
    state = {
        current: 0
    }

    handleNext = () => {
        const next = this.state.current + 1 >= brochure_pages.length ? 0 : this.state.current + 1;
        this.setState({current: next});
    }

    handlePrev = () => {
        const prev = this.state.current - 1 < 0 ? brochure_pages.length - 1 : this.state.current - 1;
        this.setState({current: prev});
    }

    handleSwipe = dir => {
        if (dir == 'left') {
            this.handlePrev();
        } else if (dir == 'right') {
            this.handleNext();
        }
    }

    render() {
        return (
            <TransitionMotion willEnter={this.willEnter}
                              willLeave={this.willLeave}
                              defaultStyles={[{
                                  key: this.state.current.toString(),
                                  style: {
                                      x: -100
                                  }
                              }]}
                              styles={[{
                                  key: this.state.current.toString(),
                                  style: {x: spring(0)}
                              }]}>
                {
                    styles => <Swipeable className="BrochurePages" onSwipe={this.handleSwipe}>
                        {
                            styles.map(style => {
                                return <Slide style={style.style} onNext={this.handleNext} onPrev={this.handlePrev}
                                              key={style.key} current={parseInt(style.key)}/>
                            })
                        }
                    </Swipeable>
                }
            </TransitionMotion>
        );
    }
}

class Pages extends Component {
    mouseX = 0
    mouseY = 0

    createCover() {
        const backgroundImage = document.createElement('img');
        backgroundImage.src = this.props.show.coverPhoto;
        backgroundImage.classList.add('Brochure-cover');
        return backgroundImage;
    }

    componentDidMount() {
        this._mounted = true;
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
        this.camera.position.set(0, 0, 700);
        this.scene = new THREE.Scene();
        this.renderer = new THREE.CSS3DRenderer();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';

        this.backgroundImage = this.createCover()
        var imageObject = new THREE.CSS3DObject(this.backgroundImage);
        imageObject.position.set(0, 0, 150);
        this.scene.add(imageObject);

        window.addEventListener('resize', this.handleWindowResize);

        window.addEventListener('orientationchange', this.handleOrientationChange);
        window.addEventListener('deviceorientation', this.handleOrientationChange);
        this.refs.wrapper.appendChild(this.renderer.domElement);
        this.animate();
        this.start();
    }

    handleOrientationChange = event => {
        this.mouseX = -event.gamma;
    }

    start() {
        this.timeline = anime.timeline();
        this.timeline.add({
            targets: this.camera.position,
            z: [150, 700],
            easing: 'easeOutExpo',
            duration: 2000,
        })
    }

    animate = () => {
        if (this._mounted)
            window.requestAnimationFrame(this.animate);
        this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
        this.camera.position.y += ((this.mouseY) - this.camera.position.y) * .05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);

    }

    handleMouseMove = (event) => {
        this.mouseX = (event.clientX - window.innerWidth / 2) / 10;
        this.mouseY = (event.clientY - window.innerHeight / 2) / 10;
    }
    handleWindowResize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    handleNext() {
        var element = document.querySelector('img.Brochure-cover');
        element.src = this.props.show.coverPhoto;
    }

    componentDidUpdate() {
        this.handleNext()
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        return (
            <div className="Brochure-wrapper" ref="wrapper" onMouseMove={this.handleMouseMove}>
            </div>
        )
    }
}

export default Brochure;
