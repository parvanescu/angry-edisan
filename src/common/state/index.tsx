import {atom} from 'recoil'
import { StateProps } from './stateprops'

const localStorageEffect = (key:any) => (inputParams:any) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      inputParams.setSelf(JSON.parse(savedValue));
    }
  
    inputParams.onSet((newValue:any, _:any, isReset:any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const deafaultGameSettingsState: StateProps = {
    tableSize: 9,
    multipleFaces: false
}

const gameSettingsState = atom({
    key: 'gameSettings',
    default: deafaultGameSettingsState,
    effects: [
        localStorageEffect('game-settings')
    ]
})

export default gameSettingsState 