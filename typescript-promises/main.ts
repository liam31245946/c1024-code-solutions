import { takeAChance } from './take-a-chance.js';

takeAChance('Liam')
  .then((successMessage) => console.log(successMessage))
  .catch((error) => console.log(error.message));
