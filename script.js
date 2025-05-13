/* @countdown: valeur charger du decompte*/
let countdown;

function startCountdown() {
  const input = document.getElementById('duration');
  /* @timeLeft: valeur qui recupere le nombre de secondes entrer par un utilisateur*/
  let timeLeft = parseInt(input.value);
  const input1 = document.getElementById('duration1');
   /* @timeLeft1: valeur qui recupere le nombre de minutes entrer par un utilisateur*/
  let timeLeft1 = parseInt(input1.value);
  const input2 = document.getElementById('duration2');
   /* @timeLeft2: valeur qui recupere le nombre d'heures entrer par un utilisateur*/
  let timeLeft2 = parseInt(input2.value);
  const input3 = document.getElementById('duration3');
   /* @timeLeft3: valeur qui recupere le nombre de jours entrer par un utilisateur*/
  let timeLeft3 = parseInt(input3.value);

  /** Verification des valeurs ... retourne un message si la valeur de l'utilisateur ne se trouve pas dans l'intervalle adequat ex: heures [0; 23] heures  */
  if (isNaN(timeLeft) || timeLeft < 0 || timeLeft > 59) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }
  if (isNaN(timeLeft1) || timeLeft1 < 0 || timeLeft1 > 59) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }
  if (isNaN(timeLeft2) || timeLeft2 < 0 || timeLeft2 > 23) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }
  if (isNaN(timeLeft3) || timeLeft3 < 0) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }

  // Affiche immédiatement les premières valeurs
  document.getElementById('timer').textContent = timeLeft;
  document.getElementById('timer1').textContent = timeLeft1;
  document.getElementById('timer2').textContent = timeLeft2;
  document.getElementById('timer3').textContent = timeLeft3;

  // Arrête un compte précédent si en cours
  clearInterval(countdown);

  // Initialise le decompte
  countdown = setInterval(() => {
    timeLeft--;         // reduction du nombre de secondes
    document.getElementById('timer').textContent = timeLeft; // Affichage de la valeur

    // Verification au cas où nous sommes dans les 5 dernieres secondes pour ajouter un effet spécial
    if (timeLeft <= 5 && timeLeft1 <= 0 && timeLeft2 <= 0 && timeLeft3 <= 0) {
        document.getElementById('timerEnd').textContent = timeLeft;
    }
    // Veriffication du temps total restant pour et arret du decompte
    if (timeLeft <= 0 && timeLeft1 <= 0 && timeLeft2 <= 0 && timeLeft3 <= 0) {
        document.getElementById('timer').textContent = 0;
      clearInterval(countdown);
      document.getElementById('timerEnd').textContent = "terminé !";
    }
    // Veriffication pour le nombre de minutes restants pour effectuer la transition minutes-secondes
    if (timeLeft <= 0 && timeLeft1 != 0) {
        timeLeft = 59;
        timeLeft1--;
        document.getElementById('timer1').textContent = timeLeft1;
        document.getElementById('timer').textContent = timeLeft;
    }
    // Veriffication pour le nombre d'heures restants pour effectuer la transition heures-minutes
    if (timeLeft <= 0 && timeLeft1 <= 0 && timeLeft2 != 0) {
        timeLeft = 59;
        timeLeft1 = 59;
        timeLeft2--;
        document.getElementById('timer2').textContent = timeLeft2;
        document.getElementById('timer1').textContent = timeLeft1;
        document.getElementById('timer').textContent = timeLeft;
    }
    // Veriffication pour le nombre de jours restants pour effectuer la transition jours-heures
    if (timeLeft <= 0 && timeLeft1 <= 0 && timeLeft2 <= 0 && timeLeft3 != 0) {
        timeLeft = 59;
        timeLeft1 = 59;
        timeLeft2 = 23;
        timeLeft3--;
        document.getElementById('timer3').textContent = timeLeft3;
        document.getElementById('timer2').textContent = timeLeft2;
        document.getElementById('timer1').textContent = timeLeft1;
        document.getElementById('timer').textContent = timeLeft;
    }
  }, 1000);
}