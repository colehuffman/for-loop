function counter (num: number) {
    // when A+B is pressed index increases by 1 from 0 to 100 and loops the inside code every time it increases
    for (let index = 0; index <= num; index++) {
        // increases the sum variable by the index variable
        Sum += index
    }
    // displays the sum variable
    basic.showString("" + (Sum))
}
let Sum = 0
// on start the count variable is set to a default of 100
let count = 100
/**
 * -A+B adds 1+2+3+4+5...+99+100...
 * 
 * -B counts down from 9 to 0
 * 
 * -A counts up from 0 to 9
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        // Sets sum to 0 so that code displays correct answer multiple times without reset
        Sum = 0
        // sends the count variable to the counter function.
        counter(count)
    } else if (input.buttonIsPressed(Button.B)) {
        // If B is pressed the index variable increases by 1 from 0 to 9 and loops inside code every time it increases
        for (let index = 0; index <= 9; index++) {
            // displays the result of 9-index
            basic.showNumber(9 - index)
        }
    } else if (input.buttonIsPressed(Button.A)) {
        // If A is pressed the index variable increases by 1 from 0 to 9 and loops inside code every time it increases
        for (let index = 0; index <= 9; index++) {
            // displays index variable
            basic.showString("" + (index))
        }
    } else if (input.pinIsPressed(TouchPin.P0)) {
        // if P0 is pressed the count variable increases by 1
        count += 1
        // displays the count variable
        basic.showString("" + (count))
    } else if (input.pinIsPressed(TouchPin.P1)) {
        // if P1 is pressed the count variable decreases by 1
        count += -1
        // displays the count variable
        basic.showString("" + (count))
    }
})
