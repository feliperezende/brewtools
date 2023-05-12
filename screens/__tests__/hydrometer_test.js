import { correctReading } from "../../utils/hydrometer"

describe('correctReading', () => {
    it('should return the correct reading', () => {
      expect(correctReading(20, 1060, 18)).toEqual(1059);
    });
    it('should return 0 if density is 0', () => {
      expect(correctReading(20, 0, 20)).toEqual(0);
    });
});