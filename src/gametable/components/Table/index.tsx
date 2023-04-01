import { CreateAnimation, IonCard, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import gameSettingsState from "../../../common/state";
import AngryHead from "./components/AngryHead";

const PresenterContainer = styled(IonCard)`
    --background: rgba(244,235,217,255);
    border: 3px solid black;
    position: absolute;
    width: 95%;
    height: 70%;
`

const Table : React.FC = () => {
    const {tableSize, multipleFaces} = useRecoilValue(gameSettingsState)
    const maxSize = Math.sqrt(tableSize)
    const rowsArray:number[] = []
    const columnsArray:number[] = []
    for(var i:number = 0;i<maxSize;i++){
        rowsArray.push(1)
        columnsArray.push(1)
    }



    return <PresenterContainer>
        <IonGrid>
            {rowsArray.map((columns,index)=>{
                return <IonRow key={`head-row-${index}`}>
                    {columnsArray.map((col,index2)=>{
                        return <IonCol key={`head-col-${index2}-${index}`} size={(12/maxSize).toString()}>
                            <AngryHead/>
                        </IonCol>
                    })}
                </IonRow>
            })}
        </IonGrid>
    </PresenterContainer>
}

export default Table