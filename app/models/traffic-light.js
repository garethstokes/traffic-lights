export class TrafficLight {
  constructor(transitionSchedule, direction) {
    this.transitionSchedule = transitionSchedule;
    this.direction = direction;
  }

  start(datetime) {
    // todo: implement
  }

  getDatetimeOfNextStatusChange() {
    // todo: implement
  }

  static normalTrafficLight(direction) {
    return new TrafficLight("normal", direction);
  }

  static inverseTrafficLight(direction) {
    return new TrafficLight("inverse", direction);
  }

}
