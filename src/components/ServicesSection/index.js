import React from 'react';
import img1 from '../../images/svg-4.svg';
import img2 from '../../images/svg-5.svg';
import img3 from '../../images/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesSectionElements';


const ServicesSection = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={img1}/>
                        <ServicesH2> Chat with psychologits </ServicesH2>
                        <ServicesP> We help reduce your stress and increase your confidence. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={img2}/>
                        <ServicesH2> Calendar </ServicesH2>
                        <ServicesP> You can approve your organizations skills. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={img3}/>
                        <ServicesH2>  Statistics  </ServicesH2>
                        <ServicesP>  We help you build a better sleep and eat routine! </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesH1>
        </ServicesContainer>
    )
}

export default ServicesSection
