class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
      return undefined;
    }
  }
  
  // Example usage:
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides); // Output: 3
  console.log(triangle.perimeter); // Output: 12
  console.log(triangle.isValid); // Output: true
  
  const square = new Square([4, 4, 4, 4]);
  console.log(square.countSides); // Output: 4
  console.log(square.perimeter); // Output: 16
  console.log(square.isValid); // Output: true
  console.log(square.area); // Output: 16
  