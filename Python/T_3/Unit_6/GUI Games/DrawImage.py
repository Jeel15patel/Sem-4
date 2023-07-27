import SimpleGUICS2Pygame.simpleguics2pygame as simple


def DrawImage(canvas):
    canvas.draw_image(image, (x / 2, y / 2), (x, y), (250, 250), (500, 500))


image = simple.load_image(
    "https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg"
)  # This is for online images
# image = simple._load_local_image("GUI Games\Img1.jpg") # This is for local images
x = image.get_width()
y = image.get_height()
print("x width", x)
print("y height", y)
frames = simple.create_frame("Draw Image", 500, 500)
frames.set_draw_handler(DrawImage)
frames.start()
