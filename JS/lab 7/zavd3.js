let checkedId = [];
function Check(id) {
  if (!checkedId.includes(id)) {
    document.getElementById(id).style.backgroundColor = "rgb(229,229,229)";
    document.getElementById("input").innerHTML +=
      document.getElementById(id).innerText + ", ";
    checkedId.push(id);
  }
  if (id == 0) {
    document.getElementById(0).style.backgroundColor = "rgb(229,229,229)";
    document.getElementById(1).style.backgroundColor = "rgb(229,229,229)";
    document.getElementById(2).style.backgroundColor = "rgb(229,229,229)";
    document.getElementById(3).style.backgroundColor = "rgb(229,229,229)";
    document.getElementById(4).style.backgroundColor = "rgb(229,229,229)";
    document.getElementById("input").innerHTML +=
      document.getElementById(1).innerText +
      ", " +
      document.getElementById(2).innerText +
      ", " +
      document.getElementById(3).innerText +
      ", " +
      document.getElementById(4).innerText;
    checkedId.push(id);
  } else {
    document.getElementById(id).style.backgroundColor = "";
    document.getElementById("input").innerHTML += "";
    checkedId = checkedId.splice(checkedId.indexOf(id), 1);
  }
}
