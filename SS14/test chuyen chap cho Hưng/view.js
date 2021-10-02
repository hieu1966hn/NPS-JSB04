const view = {}
const select = document.getElementById("cars");


view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "chap1":
      document.getElementById("app").innerHTML = component.chap1;
      const form = document.getElementById('carform');



      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
          fname: form.fname.value,
          carlist: form.carlist.value
        }
        console.log(data);
        chuyenChap(data.carlist);
      })
      break;



    case "chap2":
      document.getElementById("app").innerHTML = component.chap2;
      break;
    default:
      break;
  }
}





function chuyenChap(chapter) {
  for (let i = 1; i <= select.length; i++) {
    if (chapter === `chap${i}`){
      console.log("chuyenChap is running");
      view.setActiveScreen(`chap${i}`)
    }
  }
}