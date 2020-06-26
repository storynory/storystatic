/* references
https://github.com/KyleAMathews/typography.js/blob/master/docs/what.md
https://www.modularscale.com/
1.618 is golden  (1.272 is sq root)
1.333

*/


const basefont = "21"
scale = 1.618
//const scale = (1 / (ratio)).toFixed(3)
scale = Math.sqrt(scale)

const grid = 4
const base = {};
const line = {};
const size = {};
const font = {};


base.bodyfont = basefont;


/* pixel values */

size.xl = ((Math.pow(scale, 4) * basefont) / 16).toFixed(2) + "rem"
size.lg = ((Math.pow(scale, 3) * basefont) / 16).toFixed(2) + "rem"
size.md = ((Math.pow(scale, 2) * basefont) / 16).toFixed(2) + "rem"
size.p = basefont / 16 + "rem"
size.sm = ((basefont / scale) / 16).toFixed(2) + "rem"


line.xl = (grid * 18) / 16 + "rem"
line.lg = (grid * 12) / 16 + "rem"
line.md = (grid * 10) / 16 + "rem"
line.p = (grid * 8) / 16 + "rem"
line.sm = (grid * 6) / 16 + "rem"
line.xs = (grid * 3) / 16 + "rem"
line.one = (grid * 1) / 16 + "rem"

/* font families must be run through safe filter in template probably belong in another mod */

font.system = ' -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
font.garamond = 'font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif'
font.georgia = 'font-family: Georgia,Times,Times New Roman,serif'


base.line = line;
base.size = size;
base.font = font;

module.exports = base