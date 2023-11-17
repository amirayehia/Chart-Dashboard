import React from 'react';
import Image from 'next/image';
import {TiltNeon} from '../component/Fonts/fonts';
const Header = () => {
    return (
        <header className='header'>
            <Image
                src="/maclo.png"
                width={70}
                height={70}
                alt="Macdonals Logo"
            />
            <p className = {TiltNeon.className}>
                The Progress Dashboard Of Mcdonald
            </p>
        </header>

    )
}

export default Header