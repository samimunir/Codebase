# Sami Munir
# December 7th, 2023
# My CS Projects
# Airspace Air Traffic Simulation

print('\nAirspace Air Traffic Simulation')
print('-------------------------------')

import pygame
import random
import math

# Variable to control maximum # of aircrafts generated in the airspace
MAX_AIRCRAFTS = 5

# Initialize pygame
pygame.init()

# Screen dimensions
screen_width = 1200
screen_height = 800

# Create the screen
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Aircraft Simulation v2")

# Calculate the distance between two aircraft
def distance(aircraft1, aircraft2):
    return math.sqrt((aircraft1.x - aircraft2.x) ** 2 + (aircraft1.y - aircraft2.y) ** 2)
0-400000
# Create a list of waypoints with labels
waypoints = [(100, 100, 'Waypoint 1'),
             (200, 300, 'Waypoint 2'), 
             (500, 400, 'Waypoint 3'), 
             (700, 200, 'Waypoint 4'), 
             (500, 150, 'Waypoint 5'), 
             (125, 200, 'Waypoint 6'), 
             (660, 575, 'Waypoint 7'), 
             (100, 500, 'Waypoint 8'), 
             (400, 580, 'Waypoint 9'),
             (1000, 600, 'Waypoint 10'),
             (850, 200, 'Waypoint 11'),
             (400, 100, 'Waypoint 12'),
             (800, 750, 'Waypoint 13'),
             (300, 660, 'Waypoint 14'),
             ]

class Aircraft:
    def __init__(self, flight_number, flight_plan):
        self.x, self.y = flight_plan[0][:2]  # Initial x and y positions from the first waypoint
        # self.speed = random.uniform(0.5, 1.5)
        self.speed = random.uniform(0.01, 0.07)
        self.flight_number = flight_number
        self.flight_plan = flight_plan  # List of waypoints
        print(f'\n{self.flight_number} | {self.flight_plan}')

    def move(self, active_aircraft):
        if not self.flight_plan:
            return  # No more waypoints in the flight plan

        # Calculate direction to the next waypoint
        target_x, target_y, _ = self.flight_plan[0]
        angle_to_target = math.atan2(target_y - self.y, target_x - self.x)

        # Calculate direction to avoid collisions
        for other_aircraft in active_aircraft:
            if self != other_aircraft:
                dist = distance(self, other_aircraft)
                min_safe_distance = 25  # Adjust as needed (20-default, 30, 40)
                if dist < min_safe_distance:
                    # Calculate the angle to steer away from the other aircraft
                    avoidance_angle = math.atan2(self.y - other_aircraft.y, self.x - other_aircraft.x)
                    angle_to_target = avoidance_angle  # Set new direction to avoid collision

        # Update the aircraft's position
        self.x += self.speed * 2 * math.cos(angle_to_target)
        self.y += self.speed * 2 * math.sin(angle_to_target)

        # Check if the aircraft has reached the current waypoint
        dist_to_target = math.sqrt((target_x - self.x) ** 2 + (target_y - self.y) ** 2)
        if dist_to_target < 5:  # You can adjust this threshold
            # Remove the current waypoint from the flight plan
            self.flight_plan.pop(0)

# List to hold active aircraft
active_aircraft = []

# Your internal data structure for flight numbers
flight_numbers = ['AA123', 'BA456', 'UA789', 'DL321', 'LH654', 'BA189', 'SW1733', 'UA555', 'RY19R', 'AA522']

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Generate new aircraft if needed
    if len(active_aircraft) < MAX_AIRCRAFTS:
        available_flight_numbers = [fn for fn in flight_numbers if fn not in [aircraft.flight_number for aircraft in active_aircraft]]
        if available_flight_numbers:
            flight_number = random.choice(available_flight_numbers)
            # flight_plan = random.sample(waypoints, len(waypoints))  # Randomly shuffle the waypoints as a flight plan
            flight_plan = [waypoints[0], waypoints[1], waypoints[2], waypoints[3], waypoints[4]]
            for i in range(len(flight_plan) - 1):
                pygame.draw.line(screen, (0, 0, 0), (int(flight_plan[i][0]), int(flight_plan[i][1])), (int(flight_plan[i + 1][0]), int(flight_plan[i + 1][1])))

            new_aircraft = Aircraft(flight_number, flight_plan)
            active_aircraft.append(new_aircraft)

    # Update aircraft positions and implement collision avoidance
    for aircraft in active_aircraft:
        aircraft.move(active_aircraft)

        if not aircraft.flight_plan:
            active_aircraft.remove(aircraft)

    # Draw aircraft and flight numbers
    screen.fill((0, 0, 0))  # Clear the screen
    for aircraft in active_aircraft:
        pygame.draw.circle(screen, (0, 0, 255), (int(aircraft.x), int(aircraft.y)), 5)  # Draw aircraft
        font = pygame.font.Font(None, 36)
        text = font.render(aircraft.flight_number, True, (255, 255, 255))
        screen.blit(text, (aircraft.x, aircraft.y - 20))  # Draw flight number above the aircraft

        # Draw a faint line from the aircraft to its next waypoint
        next_waypoint = aircraft.flight_plan[0]
        # 128, 128, 128
        pygame.draw.line(screen, (0, 0, 255), (int(aircraft.x), int(aircraft.y)), (int(next_waypoint[0]), int(next_waypoint[1])))

    # Draw waypoint labels
    for x, y, label in waypoints:
        font = pygame.font.Font(None, 24)
        text = font.render(label, True, (255, 255, 255))
        screen.blit(text, (x, y))

    pygame.display.update()

# Quit pygame
pygame.quit()