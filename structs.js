class Color {
  constructor(r,g,b,a) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
  }
}

class Vec {
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class Triangle {
  constructor(p0, p1, p2) {
    if (p0.constructor.name !== 'Vec') {
      console.log('err')
    }; 
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
  }
}

export { Color, Vec, Triangle }