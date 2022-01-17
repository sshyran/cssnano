const lengthConv = {
  in: 96,
  px: 1,
  pt: 4 / 3,
  pc: 16,
};

const timeConv = {
  s: 1000,
  ms: 1,
};

const angleConv = {
  turn: 360,
  deg: 1,
};
/** @param {number} number */
function dropLeadingZero(number) {
  const value = String(number);

  if (number % 1) {
    if (value[0] === '0') {
      return value.slice(1);
    }

    if (value[0] === '-' && value[1] === '0') {
      return '-' + value.slice(2);
    }
  }

  return value;
}
/**
 * @template {(lengthConv| timeConv | angleConv) & Record<string, number>} T
 * @template {keyof T} K
 * @param {number} number
 * @param {K} unit
 * @param {T} conversion
 */
function transform(number, unit, conversion) {
  /** @type {number} */
  let base;
  let convertionUnits = Object.keys(conversion).filter((u) => {
    return unit !== u;
  });

  if (conversion[unit] === 1) {
    base = number / conversion[unit];
  } else {
    base = number * conversion[unit];
  }

  return convertionUnits
    .map((u) => dropLeadingZero(base / conversion[u]) + u)
    .reduce((a, b) => (a.length < b.length ? a : b));
}
/**
 * @param {number} number
 * @param {string} unit
 * @param {{time?: boolean, length?: boolean, angle?: boolean}} options
 */
export default function (number, unit, { time, length, angle }) {
  let value = dropLeadingZero(number) + (unit ? unit : '');
  let converted;

  const lowerCaseUnit = unit.toLowerCase();
  if (length !== false && lowerCaseUnit in lengthConv) {
    converted = transform(
      number,
      /** @type {keyof lengthConv} */ (lowerCaseUnit),
      lengthConv
    );
  }

  if (time !== false && lowerCaseUnit in timeConv) {
    converted = transform(
      number,
      /** @type {keyof timeConv} */ (lowerCaseUnit),
      timeConv
    );
  }

  if (angle !== false && lowerCaseUnit in angleConv) {
    converted = transform(
      number,
      /** @type {keyof angleConv} */ (lowerCaseUnit),
      angleConv
    );
  }

  if (converted && converted.length < value.length) {
    value = converted;
  }

  return value;
}
