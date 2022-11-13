const { flattenDiagnosticMessageText } = require("typescript");

alunos = [
    {
        nome: "Rodrigo",
        matricula: "123456",
        nota:[1,2,3,4]
    },
    {
    nome: "Adalberto",
    matricula: "123564",
    nota:[10,8,6,4]
    },
    {
    nome: "Luana",
    matricula: "115599",
    nota:[1,10,5,9]
    }
]
const [{nome,matricula,notas}]=alunos;
alunos.map(aluno => console.log(aluno.matricula))
console.log(matricula);