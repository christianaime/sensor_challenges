// MICROBIT A
// CONTROLLER:
radio.setGroup(1)

input.onButtonPressed(Button.A, function () {
    radio.sendString("WAVE")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("DANCE")
})

input.onGesture(Gesture.Shake, function () {
    radio.sendString("RESET")
})

// MICROBIT B
// SERVO MOTOR:
radio.setGroup(1)

function reset () {
    servos.P0.setAngle(0)
    servos.P1.setAngle(0)
}

function wave () {
    for (let i = 0; i < 3; i++) {
        servos.P1.setAngle(150)
        basic.pause(300)
        servos.P1.setAngle(60)
        basic.pause(300)
    }
}

function dance () {
    for (let i = 0; i < 5; i++) {
        servos.P0.setAngle(randint(30, 150))
        servos.P1.setAngle(randint(30, 150))
        basic.pause(200)
    }
}

radio.onReceivedString(function (msg) {

    if (msg == "RESET") {
        reset()
    }

    if (msg == "WAVE") {
        wave()
    }

    if (msg == "DANCE") {
        dance()
    }

})