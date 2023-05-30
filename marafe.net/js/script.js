/**
 * Created by pc on 2/23/2017.
 */
$(document).ready(function () {
   //
   // function function_1(x){
   //
   //      var c=1;
   //      for (var i=0;i<=x;i+2){
   //         c= c * i;
   //      }
   //      return c;
   //  }
    $(window).scroll(function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.getElementById("SvgjsPolygon1008").setAttribute("points", "80,80 1903,0 1903,80 0,80");
            document.getElementById("SvgjsPolygon1009").setAttribute("points", "0,0 1903,80 1903,80 0,80");

        }else{
            document.getElementById("SvgjsPolygon1008").setAttribute("points", "80,80 1903,80 1903,80 0,80");
            document.getElementById("SvgjsPolygon1009").setAttribute("points", "0,0 1903,0 1903,80 0,80");
        }

    });
});
