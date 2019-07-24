'use strict'
$(document).ready(function() {
  let brojac = 1;
  ubacivanje_slika();

  let i = 0;
  let setanje = $('#setanje').children('p');
  let tekst = "Brzo, kvalitetno, povoljno.Radno vreme: ponedeljak - subota 07-19.Više od 20 godina iskustva.Pozovite 063 824 36 99.Vreme intervencija prilagođeno Vašim dnevnim obavezama.";
  let podeljeno = tekst.split('');
  let n = setInterval(ispis_slova, 200);
  function ispis_slova() {
    $(setanje).append(podeljeno[i]);
    if (podeljeno[i] == ".") {
      clearInterval(n);
      setTimeout(brisanje, 1500);

    }
    if (i == podeljeno.length-1) {
      i = 0;
    }else {
      i++;
    }
  }
  function brisanje() {
    $(setanje).text('');
    n = setInterval(ispis_slova, 200);
  }

  function ubacivanje_slika() {

      $('#srednje').html('<img id="slika" src="img/s'+brojac+'.jpg">');

        if (brojac == 3) {
            brojac = 1;
        }else {
          brojac++;
        }

        setTimeout(brisanje_slika, 3000);



  }
  function brisanje_slika() {
    $('img').fadeOut(2000, function() {
      $('#srednje').html('<img src="img/naslovna2.png">')
      setTimeout(function() {
        $('img').fadeOut(2000, ubacivanje_slika);
      }, 3000);
    })
  }
});
