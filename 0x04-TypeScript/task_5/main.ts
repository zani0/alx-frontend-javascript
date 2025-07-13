// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  // Brand property to distinguish type
  readonly __brand: 'major';
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  // Brand property to distinguish type
  readonly __brand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}
