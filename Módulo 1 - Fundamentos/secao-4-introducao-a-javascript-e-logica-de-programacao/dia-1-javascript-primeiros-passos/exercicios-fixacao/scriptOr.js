// 1.Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// let weekDay = "quarta-feira";
let weekDay = "sábado"
// 2. Implemente condicionais para que:
/*
Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
*/
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
/*
Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
*/
else if (weekDay === "sábado" || weekDay === "domigo") {
    console.log("FINALMENTE, descanso merecido UwU")
}