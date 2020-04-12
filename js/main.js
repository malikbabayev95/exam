var name;

$('.ad').keyup(function () {
    name = $('.ad').val()
})
$('.login').click(function () {
    name = $('.ad').val()
    $(this).parents(".malik").fadeOut(200)
    $(this).parents(".malik").next(".malik").delay(200).fadeIn(500)
    $('.live_cavablar').css({
        "top": "5px",
        "display": "block"
    })
})
var duzgun = 0;
var riyaziyyat = 0;
var sehv = 0;
var text;

$('.cavab').click(function () {
    if ($(this).parents(".malik").hasClass('sual-50')) {
        $(this).parents(".malik").fadeOut(200)
        if ($(this).hasClass('riyaziyyat')) {
            riyaziyyat++
        } else if ($(this).hasClass('true')) {
            duzgun++
        }
        else {
            sehv++
        }
        var anaDili = duzgun
        var cem = anaDili + riyaziyyat

        if (duzgun >= 45) {
            var text = "Afərin," + name + " ! Sən Ana Dilindən - " + anaDili + ", Riyaziyyatdan isə - " + riyaziyyat + " suala düzgün cavab verərək, ümumilikdə 50 sualdan " + cem + " suala düzgün cavab vermisən"
        }
        else if (duzgun >= 35 && duzgun < 45) {
            var text = "Yaxşıdı," + name + " ! Sən Ana Dilindən - " + anaDili + ", Riyaziyyatdan isə - " + riyaziyyat + " suala düzgün cavab verərək, ümumilikdə 50 sualdan " + cem + " suala düzgün cavab vermisən. Ama daha yaxşı ola bilərsən :-)"
        }
        else if (duzgun >= 25 && duzgun < 35) {
            var text = "Pis deyil," + name + " ! Sən Ana Dilindən - " + anaDili + ", Riyaziyyatdan isə - " + riyaziyyat + " suala düzgün cavab verərək, ümumilikdə 50 sualdan " + cem + " suala düzgün cavab vermisən. Ama bu nəticə kifayət qədər yaxşı deyil, daha çox oxumalısan :-)"
        }
        else if (duzgun < 25) {
            var text = "Çox pis," + name + " ! Sən Ana Dilindən - " + anaDili + ", Riyaziyyatdan isə - " + riyaziyyat + " suala düzgün cavab verərək, ümumilikdə 50 sualdan " + cem + " suala düzgün cavab vermisən. Bu nəticə çox pisdir, daha çox oxumalısan :-)"
        }
        $('.netice').text(text)
        $('.neticem').fadeIn(500)


    } else {
        $(this).parents(".malik").fadeOut(200)
        $('.duzgunCavab').text("Təbriklər, " + name + " :-)")
        $('.sehvCavab').text("Çox pis, " + name + " :-(")
        if ($(this).hasClass('riyaziyyat')) {
            $(".duzgun").delay(300).fadeIn(200)
            $(".duzgun").delay(2500).fadeOut(0)
            riyaziyyat++
        }
        else if ($(this).hasClass('true')) {
            $(".duzgun").delay(300).fadeIn(200)
            $(".duzgun").delay(2500).fadeOut(0)
            duzgun++
        }
    
        else {
        $(".sehv").delay(300).fadeIn(200)
        $(".sehv").delay(2500).fadeOut(0)
        sehv++
    }
    var anaDili = duzgun
    $('.ana-duz').text(anaDili)
    $('.riyaziyyat-duz').text(riyaziyyat)
    $(this).parents(".malik").next(".malik").delay(3100).fadeIn(500)
}
})

