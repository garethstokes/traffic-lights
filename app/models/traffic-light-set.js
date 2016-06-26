import { TrafficLight } from './traffic-light'

export class TrafficLightSet {
  constructor() {
    this.trafficLights = [];
  }

  // by default a set contains all directions, N S E & W
  static defaultTrafficLightSet() {
    let trafficLightSet = new TrafficLightSet();

    trafficLightSet.trafficLights = [
      TrafficLight.normalTrafficLight("North"),
      TrafficLight.normalTrafficLight("South"),
      TrafficLight.inverseTrafficLight("East"),
      TrafficLight.inverseTrafficLight("West")
    ];

    return trafficLightSet;
  }
}
