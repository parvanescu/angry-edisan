import { IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React, { useState } from "react";
import styled from "styled-components";
import States from "../../../../common/state";
import {useRecoilState} from 'recoil';

const CharacterSelectionContainer = styled(IonCard)`
    border: 3px solid black;
    border-radius: 10%;
`

interface CharacterCardProps{
    selected: boolean
}

const CharacterCard = styled(IonCard)`
    --background: ${(props: CharacterCardProps) => props.selected? "#fff504": "#646464"};
    margin: 0!important;
    border-radius: 0;
`

const CharacterImg = styled(IonImg)`
    width: 56.25px;
    height: 45px;
`

const CharacterSelection:React.FC = () => {
    const [gameSettings, setGameSettings] = useRecoilState(States.gameSettingsState);
    const [selectedCharacter, setSelectedCharacter] = useState(gameSettings.multipleFaces == false ? 0 : 1)

    const handleCharacterChange = (index: number) => {
        const newGameSettings = {...gameSettings, multipleFaces: index == 1};
        setGameSettings(newGameSettings)
        setSelectedCharacter(index)
    }

    return <CharacterSelectionContainer>
        <IonGrid style={{padding: "0"}}>
            <IonRow>
                <IonCol style={{borderRight: "1.5px solid black", padding: "0"}}>
                    <CharacterCard selected={selectedCharacter == 0} button onClick={()=>{handleCharacterChange(0)}}>
                        <CharacterImg src={"/assets/photo/one_character.png"}/>
                    </CharacterCard>
                </IonCol>
                <IonCol style={{borderLeft: "1.5px solid black", padding: "0"}}>
                    <CharacterCard selected={selectedCharacter == 1}  button onClick={()=>{handleCharacterChange(1)}}>
                        <CharacterImg src={"/assets/photo/multiple_characters.png"}/>
                    </CharacterCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    </CharacterSelectionContainer>
}

export default CharacterSelection
