const nomeAluno = "Carlos"
const nota1 = 8.0;
const nota2 = 6.0;
const presenca = 8.0 // em porcentagem
let media = (nota1+nota2) / 2;
let aprovado = (media >=7) && (presenca >=75);
console.log("Aluno: " + nomeAluno);
console.log("Média Final: " + media);
console.log("Status de Aprovação: " + aprovado);

