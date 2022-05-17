input.onButtonPressed(Button.A, function () {
    basic.showNumber(distnace)
})
let distnace = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distnace = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
})
