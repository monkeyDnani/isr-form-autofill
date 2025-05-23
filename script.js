
document.getElementById("formInputs").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    formType: document.getElementById("formType").value,
    name: document.getElementById("name").value,
    pan: document.getElementById("pan").value,
    folio: document.getElementById("folio").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value
  };
  alert("Form data captured:\n" + JSON.stringify(data, null, 2));
});
