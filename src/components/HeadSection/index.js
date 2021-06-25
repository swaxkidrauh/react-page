import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {
    HeadCointainer,
    HeadBg,
    VideoBg,
    HeadContent,
    HeadH1,
    HeadP,
    HeadBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeadSectionElements'


const HeadSection = () => {
    const[hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
            <HeadCointainer >
                <HeadBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeadBg>
                <HeadContent>
                    <HeadH1> Happiness </HeadH1>
                    <HeadP> Sign up for a new accoun today and be happy</HeadP>
                    <HeadBtnWrapper> 
                        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true" dark="true"> 
                        Get started { hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                        </HeadBtnWrapper>
                </HeadContent>
            </HeadCointainer>
    )
}

export default HeadSection
