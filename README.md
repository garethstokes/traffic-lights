=== TRAFFIC LIGHTS

Simulate a set of traffic lights
The traffic lights are designated (N, S) and (E, W) like a compass

== PROBLEM

When switching from green to red, the yellow light must be displayed for 30 
seconds prior to it switching to red and the opposite direction switching to 
green from red.

The lights will change automatically every 5 minutes.

== ANALYSIS

Each traffic light can be in one of three states at any one time. These 
states are GREEN, YELLOW or RED. 

The transition between each state is controlled by one of two scheduling
algoritms that are cyclic in nature. I am calling these the Normal and 
the Inverse transition schedule.

Each transition schedule lasts for 10 minutes and once finished will
start again from the begining and continue such way until halted
externally.

= Normal transition schedule (NTS)

   RED     |            -------
   YELLOW  |        ----
   GREEN   |--------
 
            0----270--300------

The state of a NTS traffic light will start at GREEN until 270 seconds pass, 
in which case it will move to YELLOW for 30 seconds and then switch to RED
for the remaining time. 

= Inverse transition schedule (ITS)

   RED     |------
   YELLOW  |            ---
   GREEN   |      ------
 
            0-----5----9.5-

The state of a NTS traffic light will start at RED until 300 seconds pass, 
in which case it will move to GREEN for 270 seconds and then switch to YELLOW
for the remaining time. 

= Seconds vs Minutes

It is much easier to measure time in seconds than minutes as when we use
seconds then we can use simple modulus mathematics to model the cyclic
nature of our transition schedules

```
   // get current time in seconds
   let ts = new Date().getTime() / 1000;

   // return the seconds modulus 600, aka 10 minutes
   return ts % 600
``

== Modelling

= TrafficLight
   - Properties
      - lightColor            :: (GREEN, YELLOW, RED)
      - transitionSchedule    :: (NORMAL, INVERSE)
      - direction             :: (North, South, East, West)
   - Methods
      - start(dateTime);
      - getDateTimeOfNextStatusChange();  :: DateTime

= TrafficLightSet
   - Properties
      - trafficLights         :: [TrafficLight]
