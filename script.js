var a = +prompt('Введите свой возраст в цифрах');
if (a <= 18) {
    alert('Вы еще молоды. Вам нужно учится');
} else if (a <= 50) {
    alert('Вам нужно работать');
} else if (a <=59) {
    alert('Вам скоро на пенсию');
}
 else if (a <=150) {
    alert('Вы пенсионер');
    alert('Спасибо за проверку дз!');
    alert(':)');
}


else {
    alert('Что-то пошло не так');
}

