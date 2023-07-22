import SimpleGUICS2Pygame.simpleguics2pygame as simple


# def timer_handler():
#     print("Timer Handler called")
#     # timer.stop() # stop timer after 1 tick


# timer = simple.create_timer(1000, timer_handler)
# timer.start()


# ---------------------------------------------
# Print only 5 Times 

# t = 0
# def timer_handler():
#     global t
#     while t == 5:
#         timer.stop()
#     print(t,"Hello")
#     t = t + 1    

# timer = simple.create_timer(1000, timer_handler)
# timer.start()

# ---------------------------------------------

# def timer_handler():
#     pass

# timers = simple.create_timer(500, timer_handler)
# print(timers.is_running())

# timers.start()
# print(timers.is_running())

# timers.stop()
# print(timers.is_running())

# ---------------------------------------------
# Frame 

frames = simple.create_frame("My Frame", 200, 200,100)
frames.start()  