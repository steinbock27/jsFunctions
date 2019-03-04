"# jsFunctions" 
Bu hafta odevimizde matrix carpimini yeni fonksiyonlar yazarak yapacagiz. Bilgisayar bilimi ve yazilimcilik aslinda problem cozmeye indirgenebilir. Programlama dilleri arasindaki fark genel itibariyle problemleri cozumundeki farkliliklardir. Tabii bunun yaninda bir takim farkliliklar da mevcuttur ancak ozu problemlere yaklasimindaki farkliliklardir.

Yazilimci problem cozerken oncelikle problemi tanimlamalidir. Yol haritasini cizmelidir ve icraate dokmelidir. Isterseniz 20 yillik yazilimci da olsaniz bu uc asama sizin en buyuk yardimciniz olacaktir. Asagida yazacaginiz fonksiyonlari kullanarak matrix carpimi fonksiyonu yazacagiz. Bir problemi kucuk problemlere ayirarak cozecegiz.

Odev 1) Array Carpimi (15P)
Bu fonksiyon iki tane tek boyutlu arrayi parametre olarak alacak ve sonuç olarak yeni bir array verecek.

let productArray = multiplyArrays([1,2,3,3], [3,5,6,7]); //[3,10,18,21]


Odev 2) Array elemanlarini Toplama (10P)
Arrayin elemanlarini toplayan bir fonksiyon yaziniz.
let result = sumArrayElements([11, 23, 4, 2, 10]); // 55 vermeli


Odev 3) Array Carpma ve toplama (15P)
Yukarida yazdigimiz iki fonksiyonu kullanarak iki arrayi carpan ve toplayan bir fonksiyon yazalim
let sumProduct = sumMultiply([1,2,3,3], [3,5,6,7]); // 42 geri vermeli 

Odev 4) Matrixin istenilen sutununu array olarak cikarmak (20P)
Simdi yazacagimiz fonksiyon bir matrixin istenilen sutununu geri verecek. 

let myMatrix = [[1,2,3], [4,5,6] , [7,8,9], [10, 11,12] ];
let firstColumn = extractColumn(myMatrix, 0) // [1,4,7,10] geri vermeli

Odev 5) Matrix Carpim fonksiyonu (40P)
ilk dort alistirmada haziladiginiz fonksiyonlari kullanarak matrix carpan bir fonksiyon yazmak artik cok kolay. Bu alistirmada matrix carpimi yapan bir fonksiyon yazmanizi istiyoruz.

Odev formati: WDB18_Functions_ISIM_SOYISIM.js
