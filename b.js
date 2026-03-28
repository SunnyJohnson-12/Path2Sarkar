document.getElementById("mainForm").addEventListener("submit", function(event) 
        {
            event.preventDefault(); // Prevent normal form submission
            const name = document.getElementById("name").value.trim();
            if (name === "") {
                alert("Please enter your Name ");
                return; // Stop here if name is empty
            } 

            const radios = document.getElementsByName("qualification");
            let selected = "";

            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) 
                {
                    selected = radios[i].value;
                    break;
                }
         }


switch(selected) 
                {
                case "10th":
                    window.location.href = "10th.html";
                    break;
                case "INTER":
                    window.location.href = "Inter.html";
                    break;
                case "DIPLOMA":
                    window.location.href = "Diploma.html";
                    break;
                case "ITI":
                    window.location.href = "iti.html";
                    break;
                case "DEGREE":
                    window.location.href = "degree.html";
                    break;
                case "BTECH":
                    window.location.href = "btech.html";
                    break;
                case "MTECH":
                    window.location.href = "mtech.html";
                    break;
                    case "MBA":
                    window.location.href = "mba.html";
                    break;
                default:
                    alert("Please select a qualification before submitting.");
                }
        });