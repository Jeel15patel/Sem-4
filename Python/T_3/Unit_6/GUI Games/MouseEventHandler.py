import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui

def click(pos):
    print(pos)
    
frames = Simplegui.create_frame("Mouse Click", 300, 300)
frames.set_mouseclick_handler(click)
frames.start()