interface AllParameters {
  hasMotors: boolean | null;
  motorCount: number | null;
  motorBrand: string | null;
  motorModel: string | null;
  hasSails: boolean | null;
  sailsCount: number | null;
  sailsMaterial: string | null;
  sailsColor: string | null;
  hullColor: string | null;
  hasCabin: boolean | null;
}

export class Boat {
  constructor(private allParameters: AllParameters) {}
}
