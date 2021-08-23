import React from 'react';
import Pacman from './pacman';
import Inky from './ghosts';
import Blinky from './blinky';
import Pinky from './pinky';
import Clyde from './clyde';

const PacBoard = () => {
    return (
        <div class="black">
            <Pacman></Pacman>
            <Inky></Inky>
            <Blinky></Blinky>
            <Pinky></Pinky>
            <Clyde></Clyde>
        </div>
    )
}

export default PacBoard;