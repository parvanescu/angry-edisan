import { IonCard, IonContent, IonPage } from "@ionic/react"
import React, { useState } from "react"
import styled from "styled-components"
import GameSettings from "./components/GameSettings"
import OjisanPresenter from "./components/OjisanPresenter"
import { numberToSoundListMap } from "../common/numberToSoundListMap"

const MainMenuContainer = styled(IonContent)`
    --offset-bottom: -3rem!important;
    --offset-top: -2.5rem!important;
    --background: url(/assets/photo/menu.jpg) no-repeat center center fixed;
`

const MainMenuButtonsContainer = styled(IonCard)`
    --background: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const MainMenuButtons = styled(IonCard)`
    --background: url(/assets/photo/wooden-background.jpg) no-repeat center center fixed;
    width: 6rem;
    text-align: center;
    color: white;
    padding: 5px;
    font-size: 1rem;
`

const MainMenu :React.FC = () => {
    const [soundNr, setSoundNr] = useState(0)
    const [headSoundNr, setHeadSoundNr] = useState(0)

    //
    //

    return <MainMenuContainer>
        <OjisanPresenter/>
        <GameSettings/>
        <MainMenuButtonsContainer>
            <div style={{display: "flex", flexDirection: "column"}}>
                <MainMenuButtons button href="/game-table">
                    Play
                </MainMenuButtons>
                <MainMenuButtons button href="/options">
                    Options
                </MainMenuButtons>
            </div>
        </MainMenuButtonsContainer>
    </MainMenuContainer>
}

export default MainMenu