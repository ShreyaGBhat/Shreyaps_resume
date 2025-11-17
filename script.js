document.addEventListener("DOMContentLoaded", () => {

  // YEARS
  let y = new Date().getFullYear();
  document.getElementById("year1")?.append(y);
  document.getElementById("year2")?.append(y);
  document.getElementById("year3")?.append(y);

  // MOBILE MENU
  function menu(id){
    let btn = document.getElementById(id);
    if(!btn) return;
    btn.onclick = () => {
      let links = btn.parentElement.querySelectorAll("a");
      links.forEach(a => {
        a.style.display = a.style.display === "block" ? "none" : "block";
      });
    };
  }
  menu("menu1");
  menu("menu2");
  menu("menu3");

  // CONTACT FORM
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", e=>{
      e.preventDefault();

      let n = document.getElementById("nameField").value.trim();
      let e1 = document.getElementById("emailField").value.trim();
      let m = document.getElementById("msgField").value.trim();
      let msg = document.getElementById("formMessage");

      if(!n || !e1 || !m){
        msg.textContent = "Please fill all fields.";
        msg.style.color = "red";
        return;
      }

      msg.textContent = "Message submitted (sample only).";
      msg.style.color = "green";
      form.reset();
    });
  }
});
