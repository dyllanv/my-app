import React from 'react';
import PropTypes from 'prop-types';


class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.wait);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delayed.propTypes = {
    wait: PropTypes.number.isRequired
};

const Banner = () => {
    var cycle1 = {"--cycle": "cycle1"}
    var cycle2 = {"--cycle": "cycle2"}
    return (
        <div class="banner">
            <span id="home"></span>
            <section class="container">
                
                <div class="right-letters">
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1">D</div>
                        <div class="side b c3">V</div>
                        <div class="side c c2">E</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c1">y</div>
                        <div class="side b c2">f</div>
                        <div class="side c c3">i</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1">l</div>
                        <div class="side b c3">s</div>
                        <div class="side c c2">f</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c1">l</div>
                        <div class="side b c2">i</div>
                        <div class="side c c3">u</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1">a</div>
                        <div class="side b c3">a</div>
                        <div class="side c c2">c</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c1">n</div>
                        <div class="side b c2">i</div>
                        <div class="side c c3">l</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1"></div>
                        <div class="side b c3">i</div>
                        <div class="side c c2">e</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c1"></div>
                        <div class="side b c2">n</div>
                        <div class="side c c3">z</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1"></div>
                        <div class="side b c3">e</div>
                        <div class="side c c2">c</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c1"></div>
                        <div class="side b c2">y</div>
                        <div class="side c c3"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1"></div>
                        <div class="side b c3"></div>
                        <div class="side c c2"></div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c1"></div>
                        <div class="side b c2"></div>
                        <div class="side c c3"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c1"></div>
                        <div class="side b c3"></div>
                        <div class="side c c2"></div>
                    </div>
                </div>
            </section>

            <section class="container">
                
                <div class="right-letters">
                    <div class="prism-slider" style={cycle2}>
                    <div class="side a c2">E</div>
                    <div class="side b c3">V</div>
                    <div class="side c c1">D</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c2">d</div>
                        <div class="side b c1">e</div>
                        <div class="side c c3">e</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c2">w</div>
                        <div class="side b c3">r</div>
                        <div class="side c c1">s</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c2">a</div>
                        <div class="side b c1">i</div>
                        <div class="side c c3">s</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c2">r</div>
                        <div class="side b c3">a</div>
                        <div class="side c c1">g</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c2">d</div>
                        <div class="side b c1">n</div>
                        <div class="side c c3">t</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c2"></div>
                        <div class="side b c3">i</div>
                        <div class="side c c1"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c2"></div>
                        <div class="side b c1"></div>
                        <div class="side c c3">l</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c2"></div>
                        <div class="side b c3">i</div>
                        <div class="side c c1"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c2"></div>
                        <div class="side b c1"></div>
                        <div class="side c c3">t</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c2"></div>
                        <div class="side b c3">y</div>
                        <div class="side c c1"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c2"></div>
                        <div class="side b c1"></div>
                        <div class="side c c3"></div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c2"></div>
                        <div class="side b c3"></div>
                        <div class="side c c1"></div>
                    </div>
                </div>
            </section>
            <section class="container">
                <div class="right-letters">
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3">V</div>
                        <div class="side b c2">E</div>
                        <div class="side c c1">D</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c3">a</div>
                        <div class="side b c1">e</div>
                        <div class="side c c2">n</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3">n</div>
                        <div class="side b c2">g</div>
                        <div class="side c c1">p</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c3">g</div>
                        <div class="side b c1">e</div>
                        <div class="side c c2">i</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3">e</div>
                        <div class="side b c2">n</div>
                        <div class="side c c1">n</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c3">m</div>
                        <div class="side b c1">d</div>
                        <div class="side c c2">e</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3">e</div>
                        <div class="side b c2">e</div>
                        <div class="side c c1">a</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c3">r</div>
                        <div class="side b c1">b</div>
                        <div class="side c c2">r</div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3">t</div>
                        <div class="side b c2"></div>
                        <div class="side c c1">i</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c3"></div>
                        <div class="side b c1">l</div>
                        <div class="side c c2"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3"></div>
                        <div class="side b c2"></div>
                        <div class="side c c1">i</div>
                    </div>
                    <div class="prism-slider" style={cycle2}>
                        <div class="side a c3"></div>
                        <div class="side b c1">t</div>
                        <div class="side c c2"></div>
                    </div>
                    <div class="prism-slider" style={cycle1}>
                        <div class="side a c3"></div>
                        <div class="side b c2"></div>
                        <div class="side c c1">y</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

/* 
<section class="container c2">
                <div id="prism-slider" style={cycle2}>
                    <div class="side one">E</div>
                    <div class="side two">D</div>
                    <div class="side three">V</div>
                </div>
                <div id="prism-slider" style={cycle2}>
                    <div class="side a"> dward</div>
                    <div class="side b"> esign</div>
                    <div class="side c"> ersatility</div>
                </div>
            </section>
            <section class="container c3">
                <div id="prism-slider" style={cycle1}>
                    <div class="side one">V</div>
                    <div class="side two">D</div>
                    <div class="side three">E</div>
                </div>
                <div id="prism-slider" style={cycle1}>
                    <div class="side a"> angemert</div>
                    <div class="side b"> ependability</div>
                    <div class="side c"> ngineer</div>
                </div>
            </section>
*/

export default Banner;
