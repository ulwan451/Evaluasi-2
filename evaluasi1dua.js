
let n = 9
for (i = 0; i < n; i++){
  for (h = 0; h < n; h++){
    if(i == h || h == 8 - i || i == 4 || h == 4){
      document.write("+")
    } else {
      document.write(" - ")
    }
  }
  document.write("<br>")
}














