// Retornando um objeto literal, sem usar o return
const getPerson = () => ({name: 'John', age: 30});

console.log(getPerson());

// Retornando um objeto literal, usando o return
const car = () => {
    return { model: 'Ford', year: 2015 };
}