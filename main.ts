let Addition = 0
let countdown = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index <= 99; index++) {
            Addition = Addition + (index + 1)
            basic.showString("" + (Addition))
        }
    } else if (input.buttonIsPressed(Button.B)) {
        countdown = 9
        for (let index = 0; index <= 9; index++) {
            basic.showNumber(countdown)
            countdown += -1
        }
    } else if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index <= 9; index++) {
            basic.showString("" + (index))
        }
    }
})
