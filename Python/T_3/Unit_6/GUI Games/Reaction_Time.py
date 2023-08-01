import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui

t = 0

def draw_handler(canvas):
    canvas.draw_text(str(t), (100, 100), 24, "White")
    
def timehandle():
    global t
    t += 1
    frame.set_draw_handler(draw_handler)

def start():
    frame.add_label("Time Start")
    timer.start()
    
def stop():
    frame.add_label("Time Stop")
    timer.stop()
    
def restart():
    global t
    t = 0
    frame.add_label("Time Restart")
    timer.start()
    
frame = Simplegui.create_frame("Time", 200, 200)
timer = Simplegui.create_timer(500, timehandle)
frame.add_button("Start", start)
frame.add_button("Stop", stop)
frame.add_button("Restart", restart)
frame.start()