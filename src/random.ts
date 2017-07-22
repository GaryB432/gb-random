import { randomBytes } from "crypto";

export interface IOptions {
  NaNValue: number;
}

export class Random {

  private readonly FLOAT_SIZE: number = 4;

  constructor(private options: IOptions = { NaNValue: NaN }) { }

  public floatFromBuffer(quantity: number, buf: Buffer, fractionDigits: number = 15): number[] {
    const result: number[] = [];
    if (buf.length < (quantity * this.FLOAT_SIZE)) {
      throw new Error("Buffer too small");
    }
    for (let i = 0; i < quantity; i++) {
      const float = buf.readFloatBE(i * this.FLOAT_SIZE, true);
      if (isNaN(float)) {
        result.push(this.options.NaNValue);
      } else {
        const absf = Math.abs(float);
        const exp = absf.toExponential(fractionDigits);
        const digits = exp.slice(2, fractionDigits + 2);
        const got = +("0.".concat(digits));
        result.push(got);
      }
    }
    return result;
  }

  public async getRandoms(quantity: number): Promise<number[]> {

    return new Promise<number[]>((resolve, reject) => setTimeout(() => {
      randomBytes(quantity * this.FLOAT_SIZE, (err, buf) => {
        if (err) { reject(err); }
        resolve(this.floatFromBuffer(quantity, buf));
      });
    }, 3000));
  }

  // public async getRandom(): Promise<number> {
  //   randomBytes(4, (_err, buf) => {
  //     // const S = 15;
  //     // const float = buf.readFloatBE(0, true);
  //     // const absf = Math.abs(float);
  //     // const exp = absf.toExponential(S);
  //     // const ag = exp.slice(2, S + 2);
  //     // const na = +("0.".concat(ag));
  //     console.log(absf, exp, ag, na);
  //   });
  //   return new Promise<number>((resolve) => setTimeout(() => resolve(Math.random()), 3000));
  // }

  // public async getFloat(quantity: number = 1): Promise<number[]> {
  //   return [];
  // }
}

export const NanBuffer = [127, 192, 0, 1];
