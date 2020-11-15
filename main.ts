let strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(1)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
