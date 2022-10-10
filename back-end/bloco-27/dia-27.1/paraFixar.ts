class Tv {
  private brand: string;
  private size: number;
  private resolution: number;
  private connections: string[];
  private _connectedTo: string;

  constructor(b:string, s:number, r:number, c:string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this._connectedTo = '';
  }

  turnOn = () => {
    console.log(`${this.brand}, ${this.size} polegadas, ${this.resolution}, ${this.connections}`);
  }

  get connectedTo () {
    return this._connectedTo;
  }

  set connectedTo (conection:string) {
    if (this.connections.includes(conection)) {
      this._connectedTo = conection;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
};

const TV1 = new Tv('Samsung', 24, 1000, ['HDMI', 'Ethernet', 'Bluetooth']);
TV1.turnOn();
console.log(TV1.connectedTo);
TV1.connectedTo = 'HDMI';
console.log(TV1.connectedTo);
TV1.connectedTo = 'BlaBlaBla';
