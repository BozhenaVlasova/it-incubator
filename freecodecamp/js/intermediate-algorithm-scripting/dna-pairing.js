function pairElement(str) {
  let res = [];
  let arr = str.split("");
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === "C") res.push([arr[i], "G"]);
    if (arr[i] === "G") res.push([arr[i], "C"]);
    if (arr[i] === "T") res.push([arr[i], "A"]);
    if (arr[i] === "A") res.push([arr[i], "T"]);
  }
  return res;
}

pairElement("GCG");