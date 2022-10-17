// ./FuturisticCar.ts
import { IDrive, IDriveAndFly, IFly } from './interfaces';

export class FuturisticCar implements IDriveAndFly {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

export class Car implements IDrive {
  drive(): void {
    console.log('Drive a car');
  }
}

export class AirPlane implements IFly {
  fly(): void {
    console.log('Flying a airplane');
  }
}