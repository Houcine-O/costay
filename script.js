const calcbtn = document.getElementById("act");

function calc() {
  var king = parseInt(document.getElementById("king").value);
  var queen = parseInt(document.getElementById("queen").value);
  var twin = parseInt(document.getElementById("twin").value);
  var triple = parseInt(document.getElementById("triple").value);
  var suite = parseInt(document.getElementById("suite").value);

  var nbnuit = parseInt(document.getElementById("nbrnuit").value);

  const aSelect = document.getElementById("adultes");
  const adultes = parseInt(aSelect.value) * 1360;

  const enfgSelect = document.getElementById("enfg");
  const enfg = parseInt(enfgSelect.value) * 650;

  const enfpSelect = document.getElementById("enfp");
  const enfp = parseInt(enfpSelect.value) * 0;

  var pax = enfg + adultes + enfp;
  let typeChambre = (king + queen + twin) * 8200 + triple * 10600 + suite * 0;

  let totaltp = typeChambre + pax;
 
  var menu;
  let selectedOption;
  calcbtn.addEventListener("click", () => {
    const options = document.getElementsByName("optradio");

    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selectedOption = options[i].value;
      }
    }
    console.log("CLICK");
    if (selectedOption === "option2") {
      menu = parseInt(document.getElementById("menu").value);
    } else if (selectedOption === "option3") {
      menu = parseInt(document.getElementById("menu").value) * 2;
    } else {
      menu = 0;
    }
    document.getElementById("montantId").innerText = (totaltp + menu) * nbnuit;
  });
}


  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calcbtn.click();
      calcbtn.focus();
    }
  });