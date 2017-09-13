/**
 * Created by macbookpro on 13.09.2017.
 */
function bonusTime(salary, bonus) {
    if (bonus === true) {
        return '£'+ salary *10;
    }
    else {
        return '£'+ salary;
    }
}