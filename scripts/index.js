import fs from 'fs';
import onlyScripts from './utils/scriptFilter';

const tasks = fs.readdirSync('./scripts/tasks/').filter(onlyScripts);

tasks.forEach((task) => {
  require('./tasks/' + task);
});
