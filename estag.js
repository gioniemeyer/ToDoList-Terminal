import fs from 'fs';

function Estag() {
for(let i = 1; i < 101; i++) {
    fs.writeFileSync(`${i}.txt`, `| Lista 1 - Cálculo 1 - Exercício [${i}]`);
}}

Estag();