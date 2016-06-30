TRAFFIC LIGHTS
==============

Simulate a set of traffic lights.
The traffic lights are designated (N, S) and (E, W) like a compass

INSTALLATION AND RUNNING
------------------------

Once you've pulled down the code then use npm to install the dependencies
and run the simulation.

```
npm install
npm run simulation
```

PROBLEM
-------

When switching from green to red, the yellow light must be displayed for 30
seconds prior to it switching to red and the opposite direction switching to
green from red.

The lights will change automatically every 5 minutes.

ANALYSIS
--------

Each traffic light can be in one of three states at any one time. These
states are GREEN, YELLOW or RED.

The transition between each state is controlled by one of two scheduling
algorithms that are cyclic in nature. I am calling these the Normal and
the Inverse transition schedule.

Each transition schedule lasts for 10 minutes and once finished will
start again from the beginning and continue such way until halted
externally.

= Normal transition schedule (NTS)

```
   RED     |            -------
   YELLOW  |        ----
   GREEN   |--------

            0----270--300------
```

The state of a NTS traffic light will start at GREEN until 270 seconds pass,
in which case it will move to YELLOW for 30 seconds and then switch to RED
for the remaining time.

= Inverse transition schedule (ITS)

```
   RED     |------
   YELLOW  |            ---
   GREEN   |      ------

            0-----5----9.5-
```
The state of a NTS traffic light will start at RED until 300 seconds pass,
in which case it will move to GREEN for 270 seconds and then switch to YELLOW
for the remaining time.

Modeling
--------

= TrafficLight
   - Properties
    - id          // a unique text string
    - colour      // RED, GREEN or YELLOW
    - timestamp   // the timestamp for the colour transition
    - version     // gets iterated on each colour transition
    - schedule    // see below

   - Methods
    - transition(); // transition to the next colour and time

```
  // normal transition schedule
  [
    { delta: 270, colour: 'GREEN'  },
    { delta: 30,  colour: 'YELLOW' },
    { delta: 300, colour: 'RED'    }
  ];

  // inverse transition schedule
  [
    { delta: 300, colour: 'RED'    },
    { delta: 270, colour: 'GREEN'  },
    { delta: 30,  colour: 'YELLOW' }
  ];
```

TODO
----

  - implement dates into unit tests
  - parameterise the start and end dates
  - improve sorting
