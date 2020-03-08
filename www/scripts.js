
$('#calcul').click(() => {
    let chiffre1 = $('#chiffre1').val();
    let chiffre2 = $('#chiffre2').val();
    let calcul = Number(chiffre1) + Number(chiffre2);
    $('#result').html(calcul);
}) 


$('#calculSous').click(() => {
    let chiffreSous1 = $('#chiffreSous1').val();
    let chiffreSous2 = $('#chiffreSous2').val();
    let calculSous = Number(chiffreSous1) - Number(chiffreSous2); 
    $('#resultSous').html(calculSous);
    
})

$('#calculMulti').click(() => {
    let chiffreMulti1 = $('#chiffreMulti1').val();
    let chiffreMulti2 = $('#chiffreMulti2').val();
    let calculMulti = Number(chiffreMulti1) * Number(chiffreMulti2); 
    $('#resultMulti').html(calculMulti);
})

$('#calculDivi').click(() => {
    let chiffreDivi1 = $('#chiffreDivi1').val();
    let chiffreDivi2 = $('#chiffreDivi2').val();
    let calculDivi = Number(chiffreDivi1) / Number(chiffreDivi2); 
    $('#resultDivi').html(calculDivi);
})








