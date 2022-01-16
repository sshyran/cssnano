import { unit } from 'postcss-value-parser';
import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';

extend([namesPlugin]);

/* Code derived from https://github.com/pigcan/is-color-stop */

const lengthUnits = new Set([
  'PX',
  'IN',
  'CM',
  'MM',
  'EM',
  'REM',
  'POINTS',
  'PC',
  'EX',
  'CH',
  'VW',
  'VH',
  'VMIN',
  'VMAX',
  '%',
]);
/** @param {string} input */
function isCSSLengthUnit(input) {
  return lengthUnits.has(input.toUpperCase());
}
/** @param {string|undefined} str */
function isStop(str) {
  let stop = !str;

  if (str) {
    const node = unit(str);
    if (node) {
      if (
        node.number === '0' ||
        (!isNaN(Number(node.number)) && isCSSLengthUnit(node.unit))
      ) {
        stop = true;
      }
    } else {
      stop = /^calc\(\S+\)$/g.test(str);
    }
  }
  return stop;
}
/** @param {string} color
 * @param {string=} stop */
export default function isColorStop(color, stop) {
  return colord(color).isValid() && isStop(stop);
}
