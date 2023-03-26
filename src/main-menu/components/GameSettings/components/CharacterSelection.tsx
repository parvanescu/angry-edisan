import { IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React, { useState } from "react";
import styled from "styled-components";

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
    const [selectedCharacter, setSelectedCharacter] = useState(0)

    return <CharacterSelectionContainer>
        <IonGrid style={{padding: "0"}}>
            <IonRow>
                <IonCol style={{borderRight: "1.5px solid black", padding: "0"}}>
                    <CharacterCard selected={selectedCharacter == 0} button onClick={()=>{setSelectedCharacter(0)}}>
                        <CharacterImg src={"/assets/photo/one_character.png"}/>
                    </CharacterCard>
                </IonCol>
                <IonCol style={{borderLeft: "1.5px solid black", padding: "0"}}>
                    <CharacterCard selected={selectedCharacter == 1}  button onClick={()=>{setSelectedCharacter(1)}}>
                        <CharacterImg src={"/assets/photo/multiple_characters.png"}/>
                    </CharacterCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    </CharacterSelectionContainer>
}

export default CharacterSelection