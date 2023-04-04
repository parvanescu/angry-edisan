import { CreateAnimation, IonCard, IonImg } from "@ionic/react";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import States from "../../../../common/state";
import {numberToImageMap} from "../../../../common/numberToImageMap"

const AngryHeadCard = styled(IonCard)`
    --background: transparent;
    margin: 0;
`

interface AngryHeadsImgProps{
    dynamicHeight: number
}

//TODO: change height depending on the size
const AngryHeadsImg = styled(IonImg)<AngryHeadsImgProps>`
    height: ${(props:AngryHeadsImgProps) => props.dynamicHeight}vh;
`

interface AngryHeadProps{
    imageIndex: number,
    isBad: boolean
}

const AngryHead: React.FC<AngryHeadProps> = ({imageIndex, isBad}) => {
    const [isClicked,setIsClicked] = useState(false)
    const [gameState, setBadWasClicked] = useRecoilState(States.gameState);
    const gameSettingsState = useRecoilValue(States.gameSettingsState)
    const tableSize = Math.sqrt(gameSettingsState.tableSize)
    const heightMap = new Map<number,number>()
    heightMap.set(9,15)
    heightMap.set(16,8)
    heightMap.set(25,5)
    heightMap.set(36,2)

    const [audio] = useState(new Audio('/assets/sounds/head_sound.mp3'))

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
                audio.load()
                audio.volume = 100;
                audio.play()
                setIsClicked(true)
                if(isBad) setBadWasClicked({imageIndex})
            }}
            >
                <AngryHeadsImg 
                    src={"/assets/photo/small/masashi_small.png"}
                    dynamicHeight={heightMap.get(tableSize) || 15}
                />
            </AngryHeadCard>
        </CreateAnimation>
}

export default AngryHead
