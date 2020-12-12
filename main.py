def on_pulsed_p8_high():
    global _16, _12, _8
    basic.clear_screen()
    _16 = pins.digital_read_pin(DigitalPin.P16)
    basic.show_number(_16)
    basic.pause(100)
    basic.clear_screen()
    basic.pause(100)
    _12 = pins.digital_read_pin(DigitalPin.P12)
    basic.show_number(_12)
    basic.pause(100)
    basic.clear_screen()
    basic.pause(100)
    _8 = pins.digital_read_pin(DigitalPin.P8)
    basic.show_number(_8)
    basic.pause(100)
    basic.clear_screen()
    basic.pause(100)
    if _16 == 0 and (_12 == 0 and _8 == 1):
        basic.show_string("carte Ilian ")
        basic.pause(100)
        basic.show_string("somme Ilian ")
        basic.show_string("" + str((SOMME_ILIAN)))
    else:
        if _16 == 0 and (_12 == 1 and _8 == 0):
            SOMME_NOAH = 0
            basic.show_string("carte Noah")
            basic.pause(100)
            basic.show_string("somme Noah")
            basic.show_string("" + str((SOMME_NOAH)))
        else:
            if _16 == 1 and (_12 == 1 and _8 == 0):
                SOMME_RYAN = 0
                basic.show_string("carte Ryan")
                basic.pause(100)
                basic.show_string("somme Ryan")
                basic.show_string("" + str((SOMME_RYAN)))
            else:
                if _16 == 0 and (_12 == 1 and _8 == 1):
                    SOMME_PAPA = 0
                    basic.show_string("carte Papa")
                    basic.pause(100)
                    basic.show_string("somme Papa")
                    basic.show_string("" + str((SOMME_PAPA)))
    basic.pause(200)
    basic.show_string("aurevoir")
    basic.pause(100)
    basic.clear_screen()
pins.on_pulsed(DigitalPin.P8, PulseValue.HIGH, on_pulsed_p8_high)

_8 = 0
_12 = 0
_16 = 0
SOMME_ILIAN = 0
pins.set_pull(DigitalPin.P8, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P12, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P16, PinPullMode.PULL_UP)
SOMME_ILIAN = 0