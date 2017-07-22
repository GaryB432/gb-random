import { randomBytes } from "crypto";

const FLOAT_SIZE = 4;

export interface IOptions {
  NaNValue: number;
}

export class Random {

  constructor(private options: IOptions = { NaNValue: 0.5 }) { }

  public floatFromBuffer(quantity: number, buf: Buffer, fractionDigits: number = 15): number[] {
    const result: number[] = [];
    if (buf.length < (quantity * FLOAT_SIZE)) {
      throw new Error("Buffer too small");
    }
    for (let i = 0; i < quantity; i++) {
      const float = buf.readFloatBE(i * FLOAT_SIZE, true);
      if (isNaN(float)) {
        result.push(this.options.NaNValue);
      } else {
        const absf = Math.abs(float);
        const exp = absf.toExponential(fractionDigits);
        const fraction = exp.slice(2, fractionDigits + 2);
        const got = +("0.".concat(fraction));
        result.push(got);
      }
    }
    return result;
  }

  public async getRandoms(quantity: number): Promise<number[]> {
    return Promise.resolve(this.getRandomsSync(quantity));
  }

  public getRandomsSync(quantity: number = 1): number[] {
    return this.floatFromBuffer(quantity, randomBytes(quantity * FLOAT_SIZE));
  }

  public async getRandom(): Promise<number> {
    return Promise.resolve(this.getRandomSync());
  }

  public getRandomSync(): number {
    return this.getRandomsSync(1)[0];
  }
}

export const NanBuffer = [127, 192, 0, 1];
