import { Boat } from "./Boat";

class BoatBuilder {
  private hasMotors: boolean | null = null;
  private motorCount: number | null = null;
  private motorBrand: string | null = null;
  private motorModel: string | null = null;
  private hasSails: boolean | null = null;
  private sailsCount: number | null = null;
  private sailsMaterial: string | null = null;
  private sailsColor: string | null = null;
  private hullColor: string | null = null;
  private hasCabin: boolean | null = null;

  withMotors(count: number, brand: string, model: string): this {
    this.hasMotors = true;
    this.motorCount = count;
    this.motorBrand = brand;
    this.motorModel = model;

    return this;
  }

  withSails(count: number, material: string, color: string): this {
    this.hasSails = true;
    this.sailsCount = count;
    this.sailsMaterial = material;
    this.sailsColor = color;

    return this;
  }

  withHullColor(color: string): this {
    this.hullColor = color;

    return this;
  }

  withCabin(): this {
    this.hasCabin = true;

    return this;
  }

  build() {
    return new Boat({
      hasMotors: this.hasMotors,
      motorCount: this.motorCount,
      motorBrand: this.motorBrand,
      motorModel: this.motorModel,
      hasSails: this.hasSails,
      sailsCount: this.sailsCount,
      sailsMaterial: this.sailsMaterial,
      sailsColor: this.sailsColor,
      hullColor: this.hullColor,
      hasCabin: this.hasCabin,
    });
  }
}

const myBoat = new BoatBuilder()
  .withMotors(2, "Best Motor Co.", "OM123")
  .withSails(1, "fabric", "white")
  .withCabin()
  .withHullColor("blue")
  .build();

console.log(myBoat);
