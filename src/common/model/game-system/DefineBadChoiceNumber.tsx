
export default function defineBadChoiceNumber(matrixSize: number) {

function getRandomValueFromArray(array: string | any[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

const validChoices: number[]= [];

for(var i = 0; i<matrixSize*matrixSize; i++){
  validChoices.push(i);
}

const badChoice = getRandomValueFromArray(validChoices);


return badChoice;

}

