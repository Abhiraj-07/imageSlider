let no = 1;
async function sliderShow(x) {
    no = no + Number(x);
    let slide = await document.getElementsByClassName("slide");
  if (no < 0) {
    no = 0;
  }
  if (no > slide.length-1) {
    no = slide.length-1;
  }
  console.log(no);
  for (let ele of slide) {
    ele.style.display = "none";
  }
  slide[no].style.display = "block";
}


