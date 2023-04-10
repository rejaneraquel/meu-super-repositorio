const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById
  ('toggle-status');

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_STATUS = 'CHANGE_STATUS';

const INITIAL_STATE = {}

// Criando o Reducer
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
// Criando a Store
const store = Redux.createStore(reducer)
// Dispachando as actions
themeButton.addEventListener('click', () => {
  store.dispatch({ type: CHANGE_THEME })
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: CHANGE_STATUS, teste: 'OFFLINE' })
});

store.subscribe(() => {
  // Pegando o estado da store
  const state = store.getState()
  // Capturando o body
  const body = document.querySelector('body');
  // Lógica do tema
  if (state.theme === 'dark') {
    body.style.backgroundColor = '#333'
    body.style.color = 'white';
    themeButton.innerHTML = 'Light Mode';
  } else {
    body.style.backgroundColor = 'white'
    body.style.color = '#333';
    themeButton.innerHTML = 'Dark Mode';
  }
  // Capturando o status
  const statusLog = document.querySelector('#status');
  // Lógica do status
  if (state.status === 'offline') {
    statusLog.innerHTML = 'Ficar Online';
    statusButton.innerHTML = 'Ficar Offline';
  } else {
    statusLog.innerHTML = 'Ficar Offline';
    statusButton.innerHTML = 'Ficar Online';
  }


});