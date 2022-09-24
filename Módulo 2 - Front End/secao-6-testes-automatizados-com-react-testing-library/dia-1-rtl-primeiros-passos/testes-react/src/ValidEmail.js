// ValidEmail.js
import PropTypes from 'prop-types';
import React from 'react';

const verifyEmail = (email) => {
    // o que é isso na linha 7?
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
