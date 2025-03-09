import { Color, COLORS } from "../types/color";

export const shade = (color: Color, shade = 500) => {
  if (shade === 500) {
    return color;
  } else if (shade < 500) {
    const percentageToWhite = (500 - shade) / 5 / 100;
    const colorPercentage = ((1 - percentageToWhite) * 100).toFixed(2);
    const whitePercentage = (percentageToWhite * 100).toFixed(2);
    return `color-mix(in srgb, ${COLORS[color]} ${colorPercentage}%, white ${whitePercentage}%)`;
  } else if (shade > 500) {
    const percentageToBlack = (shade - 500) / 5 / 100;
    const colorPercentage = ((1 - percentageToBlack) * 100).toFixed(2);
    const blackPercentage = (percentageToBlack * 100).toFixed(2);
    return `color-mix(in srgb, ${COLORS[color]} ${colorPercentage}%, black ${blackPercentage}%)`;
  }
}
