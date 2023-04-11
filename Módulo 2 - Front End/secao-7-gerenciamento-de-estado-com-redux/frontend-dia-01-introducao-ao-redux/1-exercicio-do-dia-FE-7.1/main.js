const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow', 'orange'],
    index: 0,
};
const buttonPrevious = document.querySelector('#previous')
const buttonNext = document.querySelector('#next')
const buttonRandom = document.querySelector('#random')
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';
function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
        case NEXT_COLOR:
            return {
                ...state,
                index: state.index === (state.colors.length - 1) ? 0 : state.index + 1,
            }
        case PREVIOUS_COLOR:
            return {
                ...state,
                index : state.index === 0 ? (state.colors.length - 1) : state.index - 1,
            }
        case RANDOM_COLOR:
          return{
            ...state,
            colors : [...state.colors, criarCor()],
                index : state.colors.length
            
            }
                
        default:
            return state
    }
}
const store = Redux.createStore(reducer)
buttonPrevious.addEventListener('click', () => {
    console.log(store.dispatch({ type: PREVIOUS_COLOR }))
})
buttonNext.addEventListener('click', () => {
    console.log(store.dispatch({ type: NEXT_COLOR }))
})
buttonRandom.addEventListener('click', () => {
    console.log(store.dispatch({ type: RANDOM_COLOR}))
})
store.subscribe(() => {
    const { index, colors } = store.getState()
    const spanElement = document.querySelector('#value');
    const containerElement = document.querySelector('#container');
    spanElement.innerHTML = colors[index]
    containerElement.style.background = colors[index]
    // console.log(colors);
});