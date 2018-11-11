const tnn = document.getElementsByClassName("#navlink").onmouseover = function(){
  // alert('ehauhau')
};

const okk = document.getElementById("okk")

function mom() {
  console.log('aa');
  console.log('aa');
}

// okk.onclick = mom

okk.addEventListener('click', function(){
  alert('Hello world');
}, false);

okk.insertRule("#blanc { display: none }", 0);