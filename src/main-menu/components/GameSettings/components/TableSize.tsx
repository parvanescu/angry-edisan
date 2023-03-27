import React, { useEffect, useState } from "react";
import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import gameSettingsState from "../../../../common/state";

const TableSizeContainer = styled(IonCard)`
    --background: #292929;
    border-radius: 15%;
    border: 2px solid black;
`

const SizeGrid = styled(IonGrid)`
    width: 12rem;
    padding: 0;
    padding-right: 3px;
`

interface SizeCardProps{
    selected: boolean
}

const SizeCard = styled(IonCard)`
    --background: ${(props: SizeCardProps) => props.selected ? "rgba(255,245,5,255)" : "rgba(100,100,100,255)"};
    margin: 0!important;
    text-align: center;
    padding: 2px;
`

const TableSize:React.FC = () => {
    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);
    const sizes = [9,16,25,36]
    const [selectedSize,setSelectedSize] = useState(sizes.findIndex((value) => value == gameSettings.tableSize));
    
    const handleSizeChange = (index:number) => {
        const newGameSettings = {...gameSettings, tableSize: sizes[index]}
        setGameSettings(newGameSettings)
        setSelectedSize(index)
    }

    return <TableSizeContainer>
        <SizeGrid>
            <IonRow>
                <IonCol size="4" style={{textAlign: "center", marginTop: "0.30rem", color: "#fefefe"}}>
                    Size
                </IonCol>
                {sizes.map((size,index) =>
                     <IonCol size="2" style={{padding: "2px 0"}}>
                        <SizeCard selected={selectedSize == index} button onClick={()=>{handleSizeChange(index)}}>
                            <div style={{margin:"5px", color: "#040113"}}>{size}</div>
                        </SizeCard>
                    </IonCol>
                )}
            </IonRow>
        </SizeGrid>
    </TableSizeContainer>
}

export default TableSize