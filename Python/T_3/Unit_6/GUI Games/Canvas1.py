import SimpleGUICS2Pygame.simpleguics2pygame as simple

def draw_handler(canvas):
    frame.set_canvas_background("Red")
    
frame = simple.create_frame("First Frame", 200, 200,100)
frame.set_draw_handler("Hello",draw_handler)
frame.start()