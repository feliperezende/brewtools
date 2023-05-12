import { toFahrenheit, sgRatio, correctReading } from "../../utils/hydrometer"

describe('correctReading', () => {
    it('should return the correct reading', () => {
      expect(correctReading(20, 1060, 18)).toEqual(1059);
    });
    it('should return 0 if density is 0', () => {
      expect(correctReading(20, 0, 20)).toEqual(0);
    });
});

// describe('sgRatio', () => {
//     test('it should calculate the sg ratio correctly', () => {
//       expect(sgRatio(32)).toBeCloseTo(1.00000000, 8);
//       expect(sgRatio(68)).toBeCloseTo(1.00078893, 8);
//       expect(sgRatio(72)).toBeCloseTo(1.00092043, 8);
//       expect(sgRatio(100)).toBeCloseTo(1.00157277, 8);
//       expect(sgRatio(212)).toBeCloseTo(1.00403094, 8);
//     });
//   });

describe("toFahrenheit", () => {
    it("converts 0 Celsius to 32 Fahrenheit", () => {
        expect(toFahrenheit(0)).toEqual(32.0);
    });

    it("converts 25 Celsius to 77 Fahrenheit", () => {
        expect(toFahrenheit(25)).toEqual(77.0);
    });

    it("converts -40 Celsius to -40 Fahrenheit", () => {
        expect(toFahrenheit(-40)).toEqual(-40.0);
    });

    it("converts 100.5 Celsius to 212.9 Fahrenheit", () => {
        expect(toFahrenheit(100.5)).toEqual(212.9);
    });
});
  