/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const BackToTopIcon = (props) => {
    const { iconClass } = props;
    return (
        <>
            <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${iconClass ? 'active' : ''}`}><i className="bi bi-arrow-up-short"></i></a>
        </>
    )
}
export default BackToTopIcon;
