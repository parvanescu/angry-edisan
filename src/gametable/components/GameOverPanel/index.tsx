import { IonButton, IonCard, IonImg } from "@ionic/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { numberToLosingImageMap } from "../../../common/numberToImageMap";
import { numberToSoundListMap } from "../../../common/numberToSoundListMap";

const GameOverPanelCard = styled(IonCard)`
    --background: rgba(0,0,0,0.8);
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 101;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const GameOverOptionsContainer = styled(IonCard)`
    display:flex;
    flex-direction: row;
    position: absolute;
    bottom: 5rem;
    justify-content: space-between;
    --background: transparent;
    width: 90vw;
`

const PlayAgainButton = styled(IonCard)`
    --background: url(/assets/photo/wooden-background.jpg);
    padding: 1rem;
    color: white;
    font-size: 1rem;
`

interface GameOverPanelProps{
    imageIndex: number|undefined
}

const GameOverPanel: React.FC<GameOverPanelProps> = ({imageIndex}) => {
    const image = numberToLosingImageMap.get(imageIndex)
    const audioNr = Math.floor(Math.random() * 2);
    const [audio] = useState(new Audio(numberToSoundListMap.get(imageIndex)[audioNr]))


    useEffect(()=>{
        audio.load()
        audio.play()
    }, [])

    return <GameOverPanelCard>
        <IonImg src={image} style={{width: "90vw", height: "60vh"}}></IonImg>
        <GameOverOptionsContainer>
            <PlayAgainButton button href="/main-menu-ojisan">
                Main menu
            </PlayAgainButton>
            <PlayAgainButton button onClick={()=>{window.location.reload()}}>
                Play again
            </PlayAgainButton>
        </GameOverOptionsContainer>
        </GameOverPanelCard>
}

export default GameOverPanel