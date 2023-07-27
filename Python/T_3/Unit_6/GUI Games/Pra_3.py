import SimpleGUICS2Pygame.simpleguics2pygame as simple

r = 10

def TimerHandler():
    pass

def IncCircleSize():
    timers.start()
    global r
    r += 10
    if r > 250:
        r = 10
    

def DecCircleSize():
    timers.start()
    global r
    r -= 10
    if r < 10:
        r = 10


def DrawHandler(canvas):
    global r
    canvas.draw_circle((250, 250), r, 5, "Red","Yellow")

timers = simple.create_timer(500, IncCircleSize)
frames = simple.create_frame("Pra_3", 500, 500)
frames.add_button("Increase Circle Size", IncCircleSize, 100)
frames.add_button("Decrease Circle Size", DecCircleSize, 100)

frames.set_draw_handler(DrawHandler)
frames.start()
timers.start()
