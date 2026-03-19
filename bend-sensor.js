let smooth = 0

basic.forever(function () {
    let bend = pins.analogReadPin(AnalogPin.P0)


    smooth = smooth * 0.8 + bend * 0.5

    let freq = Math.map(smooth, 200, 800, 200, 900)

    music.ringTone(freq)
})