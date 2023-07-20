import SimpleGUICS2Pygame as simp

def timer_handler():
    print("Timer")

timer = simp.create_timer(500, timer_handler)
timer.start()