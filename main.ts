function _ () {
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        basic.showString("+10")
        SOMME_ILIAN = 10 + SOMME_ILIAN
        basic.pause(100)
        basic.showString("somme")
        basic.showString("" + (SOMME_ILIAN))
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            basic.showString("+10")
            SOMME_NOAH = 10 + SOMME_NOAH
            basic.pause(100)
            basic.showString("somme")
            basic.showString("" + (SOMME_NOAH))
        } else {
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                basic.showString("+10")
                SOMME_RYAN = 10 + SOMME_RYAN
                basic.pause(100)
                basic.showString("somme")
                basic.showString("" + (SOMME_RYAN))
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    basic.showString("+10")
                    SOMME_PAPA = 10 + SOMME_PAPA
                    basic.pause(100)
                    basic.showString("somme ")
                    basic.showString("" + (SOMME_PAPA))
                }
            }
        }
    }
}
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    lecteur(1, "abcd")
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    lecteur(1, "abcd")
})
input.onButtonPressed(Button.A, function () {
    _2()
})
function _2 () {
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        basic.showString("-10")
        SOMME_ILIAN = SOMME_ILIAN - 10
        basic.pause(100)
        basic.showString("somme")
        basic.showString("" + (SOMME_ILIAN))
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            basic.showString("-10")
            SOMME_NOAH = SOMME_NOAH - 10
            basic.pause(100)
            basic.showString("somme")
            basic.showString("" + (SOMME_NOAH))
        } else {
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                basic.showString("-10")
                SOMME_RYAN = SOMME_RYAN - 10
                basic.pause(100)
                basic.showString("somme")
                basic.showString("" + (SOMME_RYAN))
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    basic.showString("-10")
                    SOMME_PAPA = SOMME_PAPA - 10
                    basic.pause(100)
                    basic.showString("somme ")
                    basic.showString("" + (SOMME_PAPA))
                }
            }
        }
    }
}
function lecteur (num: number, texte: string) {
    basic.pause(500)
    basic.clearScreen()
    _16 = pins.digitalReadPin(DigitalPin.P16)
    basic.showNumber(_16)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    _12 = pins.digitalReadPin(DigitalPin.P12)
    basic.showNumber(_12)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    _8 = pins.digitalReadPin(DigitalPin.P8)
    basic.showNumber(_8)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        basic.showString("Ilian")
        basic.pause(100)
        basic.showString("somme")
        basic.showString("" + (SOMME_ILIAN))
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            basic.showString(" Noah")
            basic.pause(100)
            basic.showString("somme")
            basic.showString("" + (SOMME_NOAH))
        } else {
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                basic.showString(" Ryan")
                basic.pause(100)
                basic.showString("somme")
                basic.showString("" + (SOMME_RYAN))
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    basic.showString("Papa")
                    basic.pause(100)
                    basic.showString("somme ")
                    basic.showString("" + (SOMME_PAPA))
                }
            }
        }
    }
    basic.pause(200)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    _()
})
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    lecteur(1, "abcd")
})
let _8 = 0
let _12 = 0
let _16 = 0
let SOMME_RYAN = 0
let SOMME_PAPA = 0
let SOMME_NOAH = 0
let SOMME_ILIAN = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
SOMME_ILIAN = 100
SOMME_NOAH = 100
SOMME_PAPA = 100
SOMME_RYAN = 100
