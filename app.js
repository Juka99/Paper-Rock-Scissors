

let score = 0;
let scor = 0;
const igrac = $('.igrac');
const komp = $('.komp');


/*if(izbori[randombroj] === 'm'){
    alert('Komp je izabrao makaze !');
}*/




$('.m').on('click',function(){
    const izbori = ['p', 'k', 'm'];
    const randombroj = Math.floor(Math.random() * 3);
    console.log(izbori[randombroj]);
    if (izbori[randombroj] === 'm'){
        $('.status').css('color','tomato');
        $('.kompIzbor').html('Scissors');
        $('.kompIzbor').css('color','rgb(127, 206, 63)');
    } else if (izbori[randombroj] === 'k'){
        score++;
        komp.html(score);
        $('.kompIzbor').html('Rock');
        $('.status').css('color','#141414');
        $('.kompIzbor').css('color','rgb(221, 221, 221)');
    } else{
        scor++;
        igrac.html(scor);
        $('.status').css('color','#141414');
        $('.kompIzbor').html('Paper');
        $('.kompIzbor').css('color','rgb(245, 245, 245)');
    }

    $('.mojIzbor').html('Scissors');
    $('.mojIzbor').css('color','rgb(127, 206, 63)');

    if(score > 0){
        $('.lose').html('');
        $('.win').html('');
    }

    if(scor > 0){
        $('.lose').html('');
        $('.win').html('');
    }

    if(score == 10){
        $('.lose').html('YOU LOSE !');
        $('.igrac').html('0');
        $('.komp').html('0');
        score = 0;
        scor = 0;
    }

    if(scor == 10){
        $('.win').html('YOU WIN !');
        $('.igrac').html('0');
        $('.komp').html('0');
        score = 0;
        scor = 0;
    }

});

$('.k').on('click',function(){
    const izbori = ['p', 'k', 'm'];
    const randombroj = Math.floor(Math.random() * 3);
    console.log(izbori[randombroj]);
    if (izbori[randombroj] === 'm'){
        scor++;
        igrac.html(scor);
        $('.status').css('color','#141414');
        $('.kompIzbor').html('Scissors');
        $('.kompIzbor').css('color','rgb(127, 206, 63)');
    } else if (izbori[randombroj] === 'k'){
        $('.status').css('color','tomato');
        $('.kompIzbor').html('Rock');
        $('.kompIzbor').css('color','rgb(221, 221, 221)');
    } else{
        score++;
        komp.html(score);
        $('.status').css('color','#141414');
        $('.kompIzbor').html('Paper');
        $('.kompIzbor').css('color','rgb(245, 245, 245)');
    }

    $('.mojIzbor').html('Rock');
    $('.mojIzbor').css('color','rgb(221, 221, 221)');

    if(score > 0){
        $('.lose').html('');
        $('.win').html('');
    }

    if(scor > 0){
        $('.lose').html('');
        $('.win').html('');
    }

    if(score == 10){
        $('.lose').html('YOU LOSE !');
        $('.igrac').html('0');
        $('.komp').html('0');
        score = 0;
        scor = 0;
    }

    if(scor == 10){
        $('.win').html('YOU WIN !');
        $('.igrac').html('0');
        $('.komp').html('0');
        score = 0;
        scor = 0;
    }
});

$('.p').on('click',function(){
    const izbori = ['p', 'k', 'm'];
    const randombroj = Math.floor(Math.random() * 3);
    console.log(izbori[randombroj]);
    if (izbori[randombroj] === 'm'){
        score++;
        komp.html(score);
        $('.status').css('color','#141414');
        $('.kompIzbor').html('Scissors');
        $('.kompIzbor').css('color','rgb(127, 206, 63)');
    } else if (izbori[randombroj] === 'k'){
        scor++;
        igrac.html(scor);
        $('.status').css('color','#141414');
        $('.kompIzbor').html('Rock');
        $('.kompIzbor').css('color','rgb(221, 221, 221)');
    } else{
        $('.status').css('color','tomato');
        $('.kompIzbor').html('Paper');
        $('.kompIzbor').css('color','rgb(245, 245, 245)');
    }

    $('.mojIzbor').html('Paper');
    $('.mojIzbor').css('color','rgb(245, 245, 245)');

    if(score > 0){
        $('.lose').html('');
        $('.win').html('');
    }

    if(scor > 0){
        $('.lose').html('');
        $('.win').html('');
    }

    if(score == 10){
        $('.lose').html('YOU LOSE !');
        $('.igrac').html('0');
        $('.komp').html('0');
        score = 0;
        scor = 0;
    }

    if(scor == 10){
        $('.win').html('YOU WIN !');
        $('.igrac').html('0');
        $('.komp').html('0');
        score = 0;
        scor = 0;
    }
});