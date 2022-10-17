// ./interfaces.ts
export interface IDrive {
  drive(): void;
}

export interface IFly {
  fly(): void;
}

export interface IDriveAndFly extends IDrive, IFly {}