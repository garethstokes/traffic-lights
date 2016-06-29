export class TrafficLight {
  constructor(id, startTime, transitionSchedule)
  {
    // id is just a unique string
    this.id = id;

    // this lets us know at what point in time we are.
    this.timestamp = startTime;

    // the logic for which colour and time offset each transition is at
    this.schedule = (transitionSchedule == 'nts')
        ? TrafficLight.nts()
        : TrafficLight.its();

    // calculated by the transition schedule.
    this.colour = this.schedule[0].colour;

    // the version is incremented after each transition
    this.version = 1;

  }

  transition()
  {
    let transition = this.schedule[this.version % 3];

    this.colour     = transition.colour;
    this.version    = this.version +1;
    this.timestamp  = this.timestamp.seconds(transition.delta);
  }

  show()
  {
    return `${this.id}: ${this.timestamp.format('HH:mm')} - ${this.colour}`;
  }

  // normal transition schedule
  static nts() {
    return [
      { delta: 270, colour: 'GREEN'  },
      { delta: 30,  colour: 'YELLOW' },
      { delta: 300, colour: 'RED'    }
    ];
  }

  // inverse transition schedule
  static its() {
    return [
      { delta: 300, colour: 'RED'    },
      { delta: 270, colour: 'GREEN'  },
      { delta: 30,  colour: 'YELLOW' }
    ];
  }
}
