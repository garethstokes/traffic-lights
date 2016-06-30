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
let transitions = [north, south, east, west].map(light => {
  let results = [];
  results.push(light.toJSON())

  while (light.timestamp < endTime)
  {
    light.transition();
    results.push(light.toJSON())
  }

  return results;
});

// flattern the results into a single array
transitions = [].concat.apply([], transitions);

// sort by the versions
transitions = transitions.sort((a, b) => a.version - b.version);

// print results to screen
transitions.forEach(t => {
  console.log(`${t.id}: ${moment(t.timestamp).format('HH:mm:ss')} - ${t.colour}`);
})
