const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

//  Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
   return next();
  }
    res.sendStatus(404);
  };

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const findById = teams.find((team) => team.id === Number(id));

  res.status(200).json({ findById });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;