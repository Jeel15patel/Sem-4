# Adding Sound

import SimpleGUICS2Pygame.simpleguics2pygame as simple

sound1 = simple._load_local_sound("Sound\sample-3.ogg")


def PlayHandler():
    sound1.play()


def PauseHandler():
    sound1.pause()


def RewindHandler():
    sound1.rewind()


frames = simple.create_frame("Sound", 300, 300)
frames.add_button("Play", PlayHandler, 100)
frames.add_button("Pause", PauseHandler, 100)
frames.add_button("Rewind", RewindHandler, 100)
frames.start()
