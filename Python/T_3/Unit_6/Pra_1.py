import SimpleGUICS2Pygame.simpleguics2pygame as simple


def draw_handler(canvas):
    canvas.draw_polyline([(50, 50), (450, 450)], 5, "Red")
    canvas.draw_polyline([(450, 50), (50, 450)], 5, "Red")

    canvas.draw_circle((50, 50), 50, 5, "yellow")
    canvas.draw_circle((450, 450), 50, 5, "yellow")
    canvas.draw_circle((450, 50), 50, 5, "yellow")
    canvas.draw_circle((50, 450), 50, 5, "yellow")

    canvas.draw_polygon([[150,150],[350,150],[350,350],[150,350]],5,'white','white')

frame = simple.create_frame("Pra_1", 500, 500, 200)
frame.set_draw_handler(draw_handler)
frame.start()
