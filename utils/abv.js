export function calculateABV(og, fg) {
    var _abv = ((+og - +fg) * 131.25) / 1000;
    return +_abv.toFixed(2);
}