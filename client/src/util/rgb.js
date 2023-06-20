export function interpolateColor(startColor, endColor, progress) {
    if (progress >= 1) return endColor;
    if (progress <= 0) return startColor;
    // Convert hex colors to RGB values
    const startRGB = hexToRgb(startColor);
    const endRGB = hexToRgb(endColor);


    // Interpolate RGB values based on progress
    const interpolatedRGB = startRGB.map((startValue, index) => {
        const endValue = endRGB[index];
        const delta = endValue - startValue;
        return Math.round(startValue + delta * progress);
    });

    // Convert interpolated RGB values to hex code
    const interpolatedHex = rgbToHex(...interpolatedRGB);
    return interpolatedHex;
}

export function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

export function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}