/**
 * För varje MB:
 * 
 * * Ändra samtliga variabler till rätt term/funkt
 * 
 * *Ändra radio sänd nummer till rätt variabel samt gällande siffra
 */
input.onButtonPressed(Button.A, function () {
    if (termfunkt1 == 0) {
        termfunkt1 += 0
    } else {
        termfunkt1 += -1
    }
    if (termfunkt1 >= 0 && termfunkt1 <= 9) {
        basic.showNumber(termfunkt1)
    } else if (termfunkt1 == 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (termfunkt1 == 11) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (termfunkt1 == 12) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (termfunkt1 == 13) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (termfunkt1 == 14) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1 + 0.1 * termfunkt1)
    basic.pause(1000)
    radio.setGroup(50)
})
input.onButtonPressed(Button.B, function () {
    if (termfunkt1 == 14) {
        termfunkt1 += 0
    } else {
        termfunkt1 += 1
    }
    if (termfunkt1 >= 0 && termfunkt1 <= 9) {
        basic.showNumber(termfunkt1)
    } else if (termfunkt1 == 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (termfunkt1 == 11) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (termfunkt1 == 12) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (termfunkt1 == 13) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (termfunkt1 == 14) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    }
})
let termfunkt1 = 0
radio.setGroup(49)
termfunkt1 = 0
basic.showNumber(termfunkt1)
