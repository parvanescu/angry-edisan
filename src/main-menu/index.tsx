import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import styled from "styled-components"
import OjisanPresenter from "./components/OjisanPresenter"

const MainMenuContainer = styled(IonContent)`
    --offset-bottom: -3rem!important;
    --offset-top: -2.5rem!important;
    --background: url(/assets/photo/menu.jpg) no-repeat center center fixed;
`

const MainMenu :React.FC = () => {

    return <MainMenuContainer>
        <OjisanPresenter/>
    </MainMenuContainer>
}

export default MainMenu