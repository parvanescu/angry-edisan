import defineBadChoiceNumber from "./DefineBadChoiceNumber";

interface HeadMatrixElement{
    image: number,
    isBad: boolean
}
// matrice bazata pe tipul de tabela 

export default function getRandomMatrix(rows: number, cols: number): HeadMatrixElement[][] {

    const matrix: HeadMatrixElement[][] = [];

    let badNum = defineBadChoiceNumber(rows);
  
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        const randomNum: number = Math.floor(Math.random() * 16) + 1;
    
        matrix[i][j] = 
        {
            image: randomNum,
            isBad: i * rows + j == badNum
        };
        
      }
    }
  
    return matrix;
  }