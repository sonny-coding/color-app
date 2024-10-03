interface ColorFraction {
  r: number;
  g: number;
  b: number;
}

interface RGB {
  fraction: ColorFraction;
  r: number;
  g: number;
  b: number;
  value: string;
}

interface HSLFraction {
  h: number;
  s: number;
  l: number;
}

interface HSL {
  fraction: HSLFraction;
  h: number;
  s: number;
  l: number;
  value: string;
}

interface HSVFraction {
  h: number;
  s: number;
  v: number;
}

interface HSV {
  fraction: HSVFraction;
  h: number;
  s: number;
  v: number;
  value: string;
}

interface CMYKFraction {
  c: number;
  m: number;
  y: number;
  k: number;
}

interface CMYK {
  fraction: CMYKFraction;
  c: number;
  m: number;
  y: number;
  k: number;
  value: string;
}

interface XYZFraction {
  X: number;
  Y: number;
  Z: number;
}

interface XYZ {
  fraction: XYZFraction;
  X: number;
  Y: number;
  Z: number;
  value: string;
}

interface ColorName {
  value: string;
  closest_named_hex: string;
  exact_match_name: boolean;
  distance: number;
}

interface Image {
  bare: string;
  named: string;
}

interface Links {
  self: {
    href: string;
  };
}

interface Color {
  hex: {
    value: string;
    clean: string;
  };
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  cmyk: CMYK;
  XYZ: XYZ;
  name: ColorName;
  image: Image;
  contrast: {
    value: string;
  };
  _links: Links;
  _embedded: object;
}

export default Color;
