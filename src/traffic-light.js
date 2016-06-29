import moment from 'moment'

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
    let transition = this.schedule[this.version % 3],
        timestamp = moment(this.timestamp); // clone before modifying dates

    this.colour     = transition.colour;
    this.timestamp  = timestamp.seconds(transition.delta);
    this.version    = this.version +1;
  }

  show()
  {
    return `${this.id}: ${this.timestamp.format('HH:mm:ss')} - ${this.colour} - version: ${this.version}`;
  }

  // normal transition schedule
  static nts() {
    return [
      { delta: 300, colour: 'GREEN'  },
      { delta: 270, colour: 'YELLOW' },
      { delta: 60,  colour: 'RED'    }
    ];
  }

  // inverse transition schedule
  static its() {
    return [
      { delta: 300, colour: 'RED'    },
      { delta: 270, colour: 'GREEN'  },
      { delta: 60,  colour: 'YELLOW' }
    ];
  }
}
