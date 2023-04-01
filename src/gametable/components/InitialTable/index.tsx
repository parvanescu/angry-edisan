import { CreateAnimation, IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonItem, IonLabel, IonModal, IonRow, IonText } from "@ionic/react"
import React, { useState } from "react"
import styled from "styled-components"

const PresenterContainer = styled(IonCard)`
    --background: rgba(244,235,217,255);
    border: 3px solid black;
    position: absolute;
    width: 95%;
    z-index: 100;
    height: 70%;
`

const PresenterInnerContainer = styled(IonCard)`
    --background: rgba(255,255,255,255);
    margin: 4rem 0 8rem 0;
    border: 3px solid black;
`

const TitleContainer = styled(IonCard)`
    --background: rgba(91,53,68,255);
    margin: 2rem 0;
    border: 3px solid black;
`

const ChildContainer = styled(IonCard)`
    --background: rgba(91,53,68,255);
    margin: 4rem 6rem;
    display:flex;
    align-items: center;
    flex-direction: column;
    box-shadow: none;
`

const InitialTable: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false)

    return <CreateAnimation
        duration={1000}
        iterations={1}
        fromTo={[
            {property: 'transform', fromValue: 'translateY(0px)', toValue: 'translateY(-100vh)'},
            {property: 'display', fromValue: 'block', toValue: 'none'}
        ]}
        play={isClicked}
    >
        <PresenterContainer button onClick={()=>setIsClicked(true)}>
                <PresenterInnerContainer>
                    <TitleContainer>
                        <ChildContainer>
                            <IonImg src="/assets/photo/presenter_ojisan.png"/>
                        </ChildContainer>
                    </TitleContainer>
                </PresenterInnerContainer>
        </PresenterContainer>
    </CreateAnimation>
}

export default InitialTable