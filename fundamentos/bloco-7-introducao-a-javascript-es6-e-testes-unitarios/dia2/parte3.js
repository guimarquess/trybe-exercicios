const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
// Crie uma função para adicionar o turno da noite na lesson2 .
//  Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (obj, key, value) => (obj[key] = value);
addKey(lesson2, "turno", "noite");
console.log(lesson2);

//   Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
const getObjectLength = (obj) => Object.keys(obj).length;
console.log(getObjectLength(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson2));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

var allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Usando o objeto criado no ultimo exercício, crie uma função que retorne o número total de estudantes em todas as aulas.

function getAllStudents() {
  let sum = 0;
  Object.values(allLessons).forEach((obj) => {
    sum += obj.numeroEstudantes;
  });
  return sum;
}

console.log(getAllStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, position) => {
  return Object.values(obj)[position];
};

console.log(getValueByNumber(lesson3, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave

const verifyPair = (obj, searchedKey, value) => {
  for (let key in obj) {
    if (key == searchedKey && obj[key] == value) {
      return true;
    }
  }
  return false;
};


console.log(verifyPair(lesson2, 'professor', 'Maria Clara'))


// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

console.log(Object.values(allLessons).filter(obj=>obj.materia === "Matemática"))