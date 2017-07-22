// import { randomBytes } from "crypto";

export class Random {

  private readonly FLOAT_SIZE: number = 4;

  public floatFromBuffer(quantity: number, buf: Buffer, fractionDigits: number = 15): number[] {
    const result: number[] = [];
    if (buf.length < (quantity * this.FLOAT_SIZE)) {
      throw new Error("Buffer too small");
    }
    for (let i = 0; i < quantity; i++) {
      let float = buf.readFloatBE(i * this.FLOAT_SIZE, true);
      if (isNaN(float)) {
        // 0x7fc00001
        float = 0;
      }
      const absf = Math.abs(float);
      const exp = absf.toExponential(fractionDigits);
      const ag = exp.slice(2, fractionDigits + 2);
      const na = +("0.".concat(ag));
      // console.log(absf, exp, ag, na);
      result.push(na);
    }
    return result;
  }

  // private static async getRandom(): Promise<number> {
  //   randomBytes(4, (_err, buf) => {
  //     const S = 15;
  //     const float = buf.readFloatBE(0, true);
  //     const absf = Math.abs(float);
  //     const exp = absf.toExponential(S);
  //     const ag = exp.slice(2, S + 2);
  //     const na = +("0.".concat(ag));
  //     console.log(absf, exp, ag, na);
  //   });
  //   return new Promise<number>((resolve) => setTimeout(() => resolve(Math.random()), 3000));
  // }

  // public async getFloat(quantity: number = 1): Promise<number[]> {
  //   return [];
  // }
}
