import { IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonItem, IonLabel, IonRow, IonText } from "@ionic/react"
import React from "react"
import styled from "styled-components"

const PresenterContainer = styled(IonCard)`
    --background: rgba(244,235,217,255);
    margin: 5rem 2rem;
    border: 3px solid black;
`

const PresenterInnerContainer = styled(IonCard)`
    --background: rgba(255,255,255,255);
    margin: 1rem 0;
    border: 3px solid black;
`

const TitleContainer = styled(IonCard)`
    --background: rgba(91,53,68,255);
    margin: 1rem 0;
    border: 3px solid black;
`

const ChildContainer = styled(IonCard)`
    --background: rgba(255,255,255,255);
    margin: 2rem 3rem;
    border: 3px solid black;
    display:flex;
    align-items: center;
    flex-direction: column;
`

const OjisanPresenter: React.FC = () => {

    return <PresenterContainer button onClick={()=>console.log("Menu clicked")}>
        <PresenterInnerContainer>
            <TitleContainer>
                <ChildContainer>
                    <IonImg src="/assets/photo/presenter_ojisan.png"/>
                </ChildContainer>
            </TitleContainer>
        </PresenterInnerContainer>
    </PresenterContainer>
}

export default OjisanPresenter