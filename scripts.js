
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
   