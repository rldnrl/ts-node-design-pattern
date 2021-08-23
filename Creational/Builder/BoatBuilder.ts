import { Boat } from "./Boat";

class BoatBuilder {
  private hasMotors: boolean | null;
  private motorCount: number | null;
  private motorBrand: string | null;
  private motorModel: string | null;
  private hasSails: boolean | null;
  private sailsCount: number | null;
  private sailsMaterial: string | null;
  private sailsColor: string | null;
  private hullColor: string | null;
  private hasCabin: boolean | null;

  constructor() {
    this.hasMotors = null;
    this.motorCount = null;
    this.motorBrand = null;
    this.motorModel = null;
    this.hasSails = null;
    this.sailsCount = null;
    this.sailsMaterial = null;
    this.sailsColor = null;
    this.hullColor = null;
    this.hasCabin = null;
  }

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
