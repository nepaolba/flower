
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function myFunction() {
  const btn = document.getElementsByClassName('btn')
  const wrapper = document.getElementsByClassName('wrapper')
  const body = document.getElementsByClassName('body')
  // console.log(btn)
  btn[0].classList.add("d-none");
  wrapper[0].classList.remove("d-none");
  body[0].classList.remove("body");
}