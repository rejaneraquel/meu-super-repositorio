// ./src/myFunctions.ts

import { User } from './types/User';

// Função que retorna apenas os nomes dos usuários
export const getUserNames = (userList: User[]): string[] => userList.map((user: User) => user.name);

// Função que retorna os usuários com o numero de repositórios igual ou maior que o número de argumento
export const getUsersByRepoQuantity = (users: User[], repos: number): string[] => users
  .filter((user) => user.repositories >= repos).map((user) => user.name);

// Função que verifica se uma pessoa é a mais ativa na listagem (a que terá mais repositórios)
export const IsMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce(
    (prev, curr) => 
      (prev.repositories > curr.repositories ? prev : curr),
  );
  return mostActiveUser.name === name;
};
