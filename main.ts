function _2 () {
    coucoufafe = 10 + coucoufafe
    basic.showString("" + (coucoufafe))
}
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    if (!(travail)) {
        lecteur(1, "abcd")
    }
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    if (!(travail)) {
        lecteur(1, "abcd")
    }
})
input.onButtonPressed(Button.A, function () {
    _()
})
function _ () {
    coucoufafe = coucoufafe - 10
    basic.showString("" + (coucoufafe))
}
function lecteur (num: number, texte: string) {
    travail = true
    basic.pause(200)
    _16 = pins.digitalReadPin(DigitalPin.P16)
    _12 = pins.digitalReadPin(DigitalPin.P12)
    _8 = pins.digitalReadPin(DigitalPin.P8)
    basic.showNumber(_16)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(50)
    basic.showNumber(_12)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(50)
    basic.showNumber(_8)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(50)
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
    travail = false
}
input.onButtonPressed(Button.AB, function () {
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        SOMME_ILIAN = coucoufafe + SOMME_ILIAN
        basic.showNumber(SOMME_ILIAN)
        coucoufafe = 0
    }
    if (_16 == 0 && (_12 == 1 && _8 == 0)) {
        SOMME_NOAH = coucoufafe + SOMME_NOAH
        basic.showNumber(SOMME_NOAH)
        coucoufafe = 0
    } else {
        if (_16 == 1 && (_12 == 1 && _8 == 0)) {
            SOMME_RYAN = coucoufafe + SOMME_RYAN
            basic.showNumber(SOMME_RYAN)
            coucoufafe = 0
        } else {
            if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                SOMME_PAPA = coucoufafe + SOMME_PAPA
                basic.showNumber(SOMME_PAPA)
                coucoufafe = 0
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    _2()
})
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    if (!(travail)) {
        lecteur(1, "abcd")
    }
})
let _8 = 0
let _12 = 0
let _16 = 0
let travail = false
let SOMME_RYAN = 0
let SOMME_PAPA = 0
let SOMME_NOAH = 0
let SOMME_ILIAN = 0
let coucoufafe = 0
coucoufafe = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
SOMME_ILIAN = 100
SOMME_NOAH = 100
SOMME_PAPA = 100
SOMME_RYAN = 100
travail = false
