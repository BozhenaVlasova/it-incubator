function convertToRoman(num) {
  let r = [["I","V"],["X","L"],["C","D"],["M",""]];
  let f = [[],[[0,1,0]],[[0,2,0]],[[0,3,0]],[[0,1,1],[0,1,0]],[[0,1,1]],
          [[0,1,0],[0,1,1]],[[0,2,0],[0,1,1]],[[0,3,0],[0,1,1]],[[1,1,0],[0,1,0]]];
  let rim = "";
  String(num).split("").reverse().forEach((element, i) =>  
    	f[element].forEach((d) => 
  	     	rim = rim.concat (r[i+d[0]][d[2]].repeat(d[1]))));
      
  return rim.split("").reverse().join("");
}

convertToRoman(36);