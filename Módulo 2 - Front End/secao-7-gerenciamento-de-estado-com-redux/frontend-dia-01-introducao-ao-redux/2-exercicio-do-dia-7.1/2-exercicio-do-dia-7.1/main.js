const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById
  ('toggle-status');

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_STATUS = 'CHANGE_STATUS';

const INITIAL_STATE = {}
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    case CHANGE_STATUS:
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      };

    default:
      return state
  }
};
const store = Redux.createStore(reducer)
// console.log(reducer);

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
  const { state } = store.getState();
  console.log(store.dispatch({ type: CHANGE_THEME }))
 });

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
  console.log(store.dispatch({ type: CHANGE_STATUS, teste: 'OFFLINE' }))
  });