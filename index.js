import { TrafficLightSet } from './app/models/traffic-light-set'

var trafficLightSet = TrafficLightSet.defaultTrafficLightSet();

trafficLightSet.trafficLights.forEach( light => {
  console.log(light);
})
