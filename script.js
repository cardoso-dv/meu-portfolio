const navLinks = document.querySelectorAll('header nav a');

const activePage = () => {
   navLinks.forEach(link => {
      link.classList.remove('active');
   });
}

navLinks.forEach((link, idx) => {
   link.addEventListener('click', () => {
      if (!link.classList.contains('active')) {
         activePage();

         link.classList.add('active');
      }
   });
});


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
      const resumeDetalhes = document.querySelectorAll('.resume-detalhes');

     resumeBtns.forEach(btn =>{
        btn.classList.remove('active');
     });
        btn.classList.add('active');

        resumeDetalhes.forEach(detalhe =>{
        detalhe.classList.remove('active');
       });
       resumeDetalhes[idx].classList.add('active');
    });

});
const arrowRight = document.querySelector('.portfolio-box .navegacao .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navegacao .arrow-left');

let index = 0;

const activePortfolio = () => {
   const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
   
   imgSlide.style.transform =`translateX(calc(${index *-100}% - ${index *2}rem))`;
}

arrowRight.addEventListener('click', () =>{
   if (index < 1) {
      index++;
      arrowLeft.classList.remove('disabled');
   }
   else{
      index =2;
      arrowRight.classList.add('disabled');
   }
   activePortfolio();

});

arrowLeft.addEventListener('click', () =>{
   if (index > 1) {
      index--;
      arrowRight.classList.remove('disabled');
   }
   else{
      index =0;
      arrowLeft.classList.add('disabled');
   }
   activePortfolio();
   
});