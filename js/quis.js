function calculScore() {
    var x1= document.getElementsByName("q1");
    var x2= document.getElementsByName("q2");
    var x3= document.getElementsByName("q3");
    var x4= document.getElementsByName("q4");
    var x5= document.getElementsByName("q5");
    var x6= document.getElementsByName("q6");

    var score = 0;

    
    // 1ére question est "1"
    if  (x1[0].checked == true) {
        score++;
    }
    // 2éme question est "2"

    if  (x2[1].checked == true) {
        score++;
    }

// 3éme question est "3"

if  (x3[2].checked == true) {
    score++;
}

// 4éme question est "1 ET 2"

if  (x4[0].checked == true) {
    score++;
}
// 5éme question est "3"
if  (x5[2].checked == true) {
    score++;
}
// 6éme question est "3"
if  (x6[2].checked == true) {
    score++;
}

    // Affiche le résultat

// Affiche le résultat avec une alerte
alert('Votre score est : ' + score + '/6');
document.getElementById('result').innerHTML = 'Votre score est : ' + score +"/6";
}
