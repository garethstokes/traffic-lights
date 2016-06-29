import test from 'ava';
import moment from 'moment'

import { TrafficLight } from './../src/traffic-light'

let startTime = moment({ hour: 9, minute: 0  });

test('should init normal traffic light', t => {
  let trafficLight = new TrafficLight('test', startTime, 'nts');

  t.is(trafficLight.colour, 'GREEN');
  t.is(trafficLight.timestamp, startTime);
});

test('normal light should go YELLOW after 1 transition', t => {
  let trafficLight = new TrafficLight('test', startTime, 'nts');
  trafficLight.transition();

  t.is(trafficLight.colour, 'YELLOW');
  t.is(trafficLight.timestamp, startTime.seconds(270));
});

test('normal light should go RED after 2 transitions', t => {
  let trafficLight = new TrafficLight('test', startTime, 'nts');
  trafficLight.transition();
  trafficLight.transition();

  t.is(trafficLight.colour, 'RED');
  t.is(trafficLight.timestamp, startTime.seconds(300));
});

// inverse tests
test('should init inverse traffic light', t => {
  let trafficLight = new TrafficLight('test', startTime, 'its');

  t.is(trafficLight.colour, 'RED');
  t.is(trafficLight.timestamp, startTime);
});

test('inverse light should go GREEN after 1 transition', t => {
  let trafficLight = new TrafficLight('test', startTime, 'its');
  trafficLight.transition();

  t.is(trafficLight.colour, 'GREEN');
  t.is(trafficLight.timestamp, startTime.seconds(300));
});

test('inverse light should go YELLOW after 2 transitions', t => {
  let trafficLight = new TrafficLight('test', startTime, 'its');
  trafficLight.transition();
  trafficLight.transition();

  t.is(trafficLight.colour, 'YELLOW');
  t.is(trafficLight.timestamp, startTime.seconds(570));
});
