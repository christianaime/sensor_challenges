let x = 2
let y = 2

basic.forever(function () {

    let xVal = pins.analogReadPin(AnalogPin.P0)
    let yVal = pins.analogReadPin(AnalogPin.P1)

    if (xVal > 600 && x < 4) {
        x += 1
    } else if (xVal < 400 && x > 0) {
        x -= 1
    }

    if (yVal > 600 && y < 4) {
        y += 1
    } else if (yVal < 400 && y > 0) {
        y -= 1
    }

    basic.clearScreen()
    led.plot(x, y)

    basic.pause(200)
})