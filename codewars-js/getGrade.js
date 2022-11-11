// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function average(s1, s2, s3) {
    return [s1,s2,s3].reduce((accum, item) => (accum+item))/3;
}

function getGrade (s1, s2, s3) {
    let avg = average(s1,s2,s3);
    if (90 <= avg && avg <= 100) return 'A';
    else if (80 <= avg && avg < 90) return 'B';
    else if (70 <= avg && avg < 80) return 'C';
    else if (60 <= avg && avg < 70) return 'D';
    else return 'F';
  }