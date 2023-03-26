import { IonCard, IonContent, IonHeader } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const OptionsContainer = styled(IonContent)`
    --offset-bottom: -3rem!important;
    --offset-top: -2.5rem!important;
    --background: url(/assets/photo/menu.jpg) no-repeat center center fixed;
`

const OptionsHeader = styled(IonCard)`
    --background: url(/assets/photo/wooden-background.jpg);
    width: auto;
    display: flex;
    flex-direction: row;
`

const BackButton = styled(IonCard)`
    --background: transparent;
    border: 1px solid grey;
    width: 4rem;
    color: white;
    text-align: center;
    font-size: 1rem;
`

const OptionsDisplayHeader = styled(IonCard)`
    --background: transparent;
    width: 100%;
    color: white;
    text-align: center;
    font-size: 1rem;
`

const Options: React.FC = () => {

    return <OptionsContainer>
        <OptionsHeader>
            <BackButton button href="/main-menu-ojisan">Back</BackButton>
            <OptionsDisplayHeader>Options</OptionsDisplayHeader>
        </OptionsHeader>
    </OptionsContainer>
}

export default Options;