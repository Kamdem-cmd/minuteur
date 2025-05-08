let countdown;

function startCountdown() {
  const input = document.getElementById('duration');
  let timeLeft = parseInt(input.value);
  const input1 = document.getElementById('duration1');
  let timeLeft1 = parseInt(input1.value);
  const input2 = document.getElementById('duration2');
  let timeLeft2 = parseInt(input2.value);
  const input3 = document.getElementById('duration3');
  let timeLeft3 = parseInt(input3.value);

  if (isNaN(timeLeft) || timeLeft < 0 || timeLeft > 59) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }
  if (isNaN(timeLeft1) || timeLeft1 < 0 || timeLeft1 > 59) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }
  if (isNaN(timeLeft2) || timeLeft2 < 0 || timeLeft > 23) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }
  if (isNaN(timeLeft3) || timeLeft3 < 0) {
    alert("Veuillez entrer une durée valide supérieure à 0.");
    return;
  }

  // Affiche immédiatement la première valeur
  document.getElementById('timer').textContent = timeLeft;
  // Affiche immédiatement la première valeur
  document.getElementById('timer1').textContent = timeLeft1;
  // Affiche immédiatement la première valeur
  document.getElementById('timer2').textContent = timeLeft2;
  // Affiche immédiatement la première valeur
  document.getElementById('timer3').textContent = timeLeft3;

  // Arrête un compte précédent si en cours
  clearInterval(countdown);

  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;

    if (timeLeft <= 5 && timeLeft1 <= 0 && timeLeft2 <= 0 && timeLeft3 <= 0) {
        document.getElementById('timerEnd').textContent = timeLeft;
    }

    if (timeLeft <= 0 && timeLeft1 <= 0 && timeLeft2 <= 0 && timeLeft3 <= 0) {
        document.getElementById('timer').textContent = 0;
      clearInterval(countdown);
      document.getElementById('timerEnd').textContent = "Le compte à rebours est terminé !";
    }
    if (timeLeft <= 0 && timeLeft1 != 0) {
        timeLeft = 59;
        timeLeft1--;
        document.getElementById('timer1').textContent = timeLeft1;
        document.getElementById('timer').textContent = timeLeft;
    }
    if (timeLeft <= 0 && timeLeft1 <= 0 && timeLeft2 != 0) {
        timeLeft = 59;
        timeLeft1 = 59;
        timeLeft2--;
        document.getElementById('timer2').textContent = timeLeft2;
        document.getElementById('timer1').textContent = timeLeft1;
        document.getElementById('timer').textContent = timeLeft;
    }
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