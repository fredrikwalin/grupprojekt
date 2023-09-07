def on_button_pressed_a():
    global termfunkt1
    if termfunkt1 == 0:
        termfunkt1 += 0
    else:
        termfunkt1 += -1
    if termfunkt1 >= 0 and termfunkt1 <= 9:
        basic.show_number(termfunkt1)
    elif termfunkt1 == 10:
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
    elif termfunkt1 == 11:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    elif termfunkt1 == 12:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    elif termfunkt1 == 13:
        basic.show_leds("""
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            """)
    elif termfunkt1 == 14:
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_number(termfunkt1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global termfunkt1
    if termfunkt1 == 14:
        termfunkt1 += 0
    else:
        termfunkt1 += 1
    if termfunkt1 >= 0 and termfunkt1 <= 9:
        basic.show_number(termfunkt1)
    elif termfunkt1 == 10:
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
    elif termfunkt1 == 11:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    elif termfunkt1 == 12:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    elif termfunkt1 == 13:
        basic.show_leds("""
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            """)
    elif termfunkt1 == 14:
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)

termfunkt1 = 0
termfunkt1 = 0
basic.show_number(termfunkt1)

def on_forever():
    pass
basic.forever(on_forever)
