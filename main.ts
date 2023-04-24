input.onSound(DetectedSound.Loud, function () {
    lights_ON = !(lights_ON)
    if (lights_ON) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lights_ON = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
