import defineBadChoiceNumber from "./DefineBadChoiceNumber";

interface HeadMatrixElement{
    image: number,
    isBad: boolean
}
// matrice bazata pe tipul de tabela 

export default function getRandomMatrix(rows: number, cols: number, multipleFaces: boolean): HeadMatrixElement[][] {

    const matrix: HeadMatrixElement[][] = [];

    let badNum = defineBadChoiceNumber(rows);
    const randomNumForPanel: number = Math.floor(Math.random() * 14) + 1; 
  
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        const randomNum: number = Math.floor(Math.random() * 14) + 1;
    
        matrix[i][j] = 
        {
            image: multipleFaces == true ? randomNum: randomNumForPanel,
            isBad: i * rows + j == badNum
        };
        
      }
    }
  
    return matrix;
  }