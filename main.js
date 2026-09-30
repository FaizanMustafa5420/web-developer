 function calculate() {
            var yourScore = document.getElementById("obtainedMarks").value;
            var totalScore = document.getElementById("totalMarks").value;
            var percentage = (yourScore * 100) / totalScore;
            document.getElementById("percentage").innerHTML = percentage.toFixed(1);
        }