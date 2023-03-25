import React, { Children, PropsWithChildren, ReactNode } from "react"
import styled from "styled-components"
import { IonContent, IonPage } from "@ionic/react";


const MainMenuContainer = styled(IonContent)`
    --background: url(/assets/photo/cap_ojisan.png)
`;

const MainMenu :React.FC<PropsWithChildren> = (props) => {

    return <IonPage>
        <MainMenuContainer fullscreen>
            {props.children}
        </MainMenuContainer>
    </IonPage>
}

export default MainMenu