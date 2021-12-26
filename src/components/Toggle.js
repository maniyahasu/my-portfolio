import React from 'react'

const ToggleButton = (props) => {
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={props.onClick}></i>
        </div>
    )
}
export default ToggleButton;
