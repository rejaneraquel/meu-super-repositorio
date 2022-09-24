import { render, screen } from '@testing-library/react';
import React from 'react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

/* No lugar de render(<App />), colocamos render(<ValidEmail email={ EMAIL_USER } />). O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={ EMAIL_USER }. O teste verifica se, com a prop passada, o nosso teste passará. */
test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
  // Note que utilizamos o 'queryBy' em vez do 'getBy', pois o getBy retorna um erro
// caso o elemento não seja encontrado, encerrando o teste, já o queryBy retorna null,
// sendo útil para verificar a não existência de algum elemento na página.
test('Testando se o componente não aparece caso o campo e-mail esteja vazio.', () => {
    render(<ValidEmail email="" />)
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).not.toBeInTheDocument();
  });
  