import React from 'react'

const Sidebar = () => {
    
    return (
        <div class="sidebar">
            <div class="logo">DEV</div>
            <div class="links">
                <a href="#about">Personal Info</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#volunteer">Volunteer</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#interests">Interests</a>
                <button hidden="true"></button>
            </div>
        </div>
    )
}

export default Sidebar;