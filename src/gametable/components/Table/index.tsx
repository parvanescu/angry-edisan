import { CreateAnimation, IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import getRandomMatrix from "../../../common/model/game-system/GenerateMatrixBasedOnInput";
import States from "../../../common/state";
import AngryHead from "./components/AngryHead";


const PresenterContainer = styled(IonCard)`
    --background: rgba(244,235,217,255);
    border: 3px solid black;
    width: 95%;
    height: 70%;
`

const Table : React.FC = () => {
    const {tableSize, multipleFaces} = useRecoilValue(States.gameSettingsState)
    const maxSize = Math.sqrt(tableSize)
    const tableMatrix = getRandomMatrix(maxSize, maxSize, multipleFaces)

    return <PresenterContainer>
        <IonGrid>
            {tableMatrix.map((columns,index)=>{
                return <IonRow key={`head-row-${index}`}>
                    {columns.map((col,index2)=>{
                        return <IonCol key={`head-col-${index2}-${index}`} size={(12/maxSize).toString()}>
                            <AngryHead imageIndex={col.image} isBad={col.isBad}/>
                        </IonCol>
                    })}
                </IonRow>
            })}
        </IonGrid>
    </PresenterContainer>
}

export default Table