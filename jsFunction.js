//Submitted by: Ismet Ferdi SEN
//Date: 03.03.2019
//Odev 1) Array Carpimi (15P)//
function multiplyArrays(array1,array2){
  array3= new Array();
for (var i = 0; i < array1.length; i++) {
  array3[i]= array1[i]*array2[i];
}
  return array3;
}
//Odev 2) Array elemanlarini Toplama (10P)
function sumArrayElements(array1) {
  var sum= 0;
for (var i = 0; i < array1.length; i++) {
  sum += array1[i]
}
return sum;
}
//Odev 3) Array Carpma ve toplama (15P)
function multiplySum(array1,array2){
  return sumArrayElements(multiplyArrays(array1,array2))
}
//Odev 4) Matrixin istenilen sutununu array olarak cikarmak (20P)
function extractColumns(matrix,columnNumber){
extractedArray= new Array();
for (var i = 0; i < matrix.length; i++) {
  extractedArray[i]=matrix[i][columnNumber];
}
return extractedArray;
}
//Odev 5) Matrix Carpim fonksiyonu (40P)
function multiplyMatrices(matrix1,matrix2){
  matrix3 = new Array();
  for (var i = 0; i < matrix1.length; i++) {
      tempArray= new Array();
    for (var j = 0; j <matrix2[0].length; j++) {

      tempArray.push(multiplySum(matrix1[i],extractColumns(matrix2,j)));
    }
    matrix3.push(tempArray);
  }
  return matrix3;
}
