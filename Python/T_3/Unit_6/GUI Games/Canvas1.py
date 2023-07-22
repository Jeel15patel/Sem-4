import SimpleGUICS2Pygame.simpleguics2pygame as simple

mycoloes = ["Red", "Green", "Blue", "Yellow"]
t = 0


def timer_handler():
    global t
    t += 1
    if t == 4:
        t = 0


def draw_handler(canvas):
    frame.set_canvas_background(mycoloes[t])


timers = simple.create_timer(500, timer_handler)
frame = simple.create_frame("First Frame", 200, 200, 100)
frame.set_draw_handler(draw_handler)
timers.start()
frame.start()
