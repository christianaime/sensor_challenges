let start = 0
let reaction = 0
basic.forever(function () {
    basic.pause(randint(2000, 5000))
    basic.showIcon(IconNames.Yes)
    
    // Start timer
    start = input.runningTime()
    // Wait for hand detection
    while (pins.analogReadPin(AnalogReadWritePin.P2) >= 53) {

    }
    // Stop timer
    reaction = input.runningTime() - start
    if (reaction > 200) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    // Show reaction time
    basic.showNumber(reaction)
    basic.pause(2000)
})