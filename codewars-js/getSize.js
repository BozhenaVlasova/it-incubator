// Write a function that returns the total surface area and volume of a box as an array: 
// [area, volume]

function getSize(width, height, depth) {
    let area = ((width+height)*depth) + ((width+depth)*height) + ((height+depth)*width)
    let volume = width * height * depth
    return [area, volume]
  }