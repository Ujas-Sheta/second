import React from 'react'
import './header.scss'
import HeaderImage from '../../../assests/image/profile.jpeg'

export default function Header() {
    return (
        <div className='header-section'>
            <div className='container'>
                <div className='header-flex'>
                    <h1>Dashboard</h1>
                    <div className='header-image'>
                        <img src={HeaderImage} alt='HeaderImage'></img>
                    </div>

                </div>
            </div>
        </div>
    )
}
