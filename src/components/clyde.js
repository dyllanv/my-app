import React from 'react';

const Clyde = () => {
    var style = {"--ghost-color": "orange"}
    var eyeballs = {"--ghost-eyeballs": "clyde-eyeballs"}
    var pupils = {"--ghost-pupils": "clyde-pupils"}

    return (
        <div class="clyde" style={style}>
            <div class="ghost-body">
                <svg viewBox="0 0 100 100">
                    <polygon points="0 24, 6 24, 6 16, 12 16, 12 12, 18 12, 
                    18 8, 24 8, 24 4, 30 4, 30 0, 50 0, 50 4, 56 4, 56 8, 62 8, 
                    62 12, 68 12, 68 16, 74 16, 74 24, 80 24, 80 80, 0 80">
                    </polygon>
                </svg>
            </div>
            <div class="left-eye-clyde" style={eyeballs}>
                <div class="inner-eye-clyde" style={pupils}></div>
            </div>
            <div class="right-eye-clyde" style={eyeballs}>
                <div class="inner-eye-clyde" style={pupils}></div>
            </div>
            <div class="feet"></div>
        </div>
    )
}

export default Clyde;