input.onButtonPressed(Button.A, function () {
    if (transmit == 0) {
        beacon_no += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    transmit = 1
    led_x = beacon_no % 5 - 1
    led_y = (beacon_no - beacon_no % 5) / 5
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (transmit == 0) {
        beacon_no += 1
    }
})
let led_y = 0
let led_x = 0
let beacon_no = 0
let transmit = 0
let LED_pattern = ""
radio.setGroup(128)
radio.setTransmitPower(1)
transmit = 0
basic.forever(function () {
    if (transmit == 0) {
        basic.showNumber(beacon_no)
    } else {
        while (true) {
            radio.sendValue("beacon", beacon_no)
            led.plot(led_x, led_y)
            basic.pause(500)
            led.unplot(led_x, led_y)
            basic.pause(1000)
        }
    }
})
