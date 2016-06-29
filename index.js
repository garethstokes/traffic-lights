import moment from 'moment'
import { TrafficLight } from './src/traffic-light'

let startTime = moment({ hour: 9, minute: 0  }),
    endTime   = moment({ hour: 9, minute: 30 });

let normal = [], inverse = [], events = [];

// set the NTS scheduled lights
let north = new TrafficLight('North', startTime, 'nts'),
    south = new TrafficLight('South', startTime, 'nts');

let east = new TrafficLight('East', startTime, 'its'),
    west = new TrafficLight('West', startTime, 'its');

// iterate through each light and run the simulation
[east].forEach(light => {
  console.log(light.show());

  while (light.timestamp < endTime)
  {
    light.transition();
    console.log(light.show());
  }
})

// sort the events to be in order
events.sort();

// print out to screen
events.forEach(console.log);
