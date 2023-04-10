const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById
  ('toggle-status');
const OFFLINE = 'OFFLINE';
const ONLINE = 'ONLINE;'
const THEME_DARK = 'THEME_DARK';
const THEME_LIGHT = 'THEME_LIGHT';

const INITIAL_STATE = {}
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case THEME_DARK: 
   return { 
    // fazer lógica;
   };
   case THEME_LIGHT: 
   return { 
    // fazer lógica;
   };
   case ONLINE: 
   return { 
    // fazer lógica;
   };
   case OFFLINE: 
   return { 
    // fazer lógica;
   };

    default:
      return state
  }
};
const store = Redux.createStore(reducer)
// console.log(reducer);

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
  console.log(store.dispatch({ type: THEME_DARK, teste: 'ok' }))
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
});