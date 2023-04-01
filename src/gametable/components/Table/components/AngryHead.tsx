import { CreateAnimation, IonCard, IonImg } from "@ionic/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import States from "../../../../common/state";
import {numberToImageMap} from "../../../../common/numberToImageMap"

const AngryHeadCard = styled(IonCard)`
    --background: transparent;
    margin: 0;
`

//TODO: change height depending on the size
const AngryHeadsImg = styled(IonImg)`
    height: 15vh;
`

interface AngryHeadProps{
    imageIndex: number,
    isBad: boolean
}

const AngryHead: React.FC<AngryHeadProps> = ({imageIndex, isBad}) => {
    const [isClicked,setIsClicked] = useState(false)
    const [gameState, setBadWasClicked] = useRecoilState(States.gameState);

    return  <CreateAnimation
        duration={1000}
        iterations={1}
        fromTo={[
            {property: 'transform', fromValue: 'translateY(0px)', toValue: 'translateY(-100vh)'},
            {property: 'display', fromValue: 'block', toValue: 'none'}
        ]}
        play={isClicked}
        >
            <AngryHeadCard button onClick={()=>{
                setIsClicked(true)
                if(isBad) setBadWasClicked({imageIndex})
            }}>
                <AngryHeadsImg src={numberToImageMap.get(imageIndex)}></AngryHeadsImg>
            </AngryHeadCard>
        </CreateAnimation>
}

export default AngryHead
