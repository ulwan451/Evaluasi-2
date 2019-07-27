document.write("<br>")

let n = 9
for (i = 0; i < n; i++){
  for (h = 0; h < n; h++){
    if(h % 2 == 1 != i % 2 == 0){
      document.write("+")
    } else {
      document.write(" - ")
    }
  }
  document.write("<br>")
}
  