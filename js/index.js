import data from '../data.js';
import productScreen from '../screens/productScreen.js';
const router = () => {
    const main = document.getElementById('mainContainer');
    const nextBtn = document.getElementById('nextPageBtn');
    const burger = document.querySelector('.burger');
    const body = document.body;
    const siteFooter = document.getElementById('siteFooter');
    const prevPage = document.querySelector('.prevPage');
    const nextPage = document.querySelector('.nextPage');
    const boxTransition = document.querySelectorAll('.boxTransition');
    const siteMenu = document.querySelector('.siteMenu');
    const actualPage = document.querySelector('.actualPage');
    const totalPages = document.querySelector('.totalPages');
    const contHeader = document.querySelector('.contHeader');

    totalPages.innerHTML = data.projects.length


    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    var image = document.getElementById('source');
    

    let particlesArray;

    let shapeArr = [];

    for (let i = 0; i < canvas.children.length; i++) {
        const element = canvas.children[i];
        shapeArr.push(element)
    }

    // get mouse position

    let mouse = {
        x: null,
        y: null,
        radius: 0
    }

    

    // create particle

    class Particle {
        constructor(image, x, y, directionX, directionY, size, color){
            this.image = image;
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // method to draw individual particles

        draw() {
            ctx.beginPath();
            // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
            ctx.fillStyle = '#8c5523';
            ctx.fill();

        }

        // Check particle position, check mouse position, move the particle, draw the particle

        update() {
            // check if particle is still winthin canvas

            if(this.x > canvas.width || this.x < 0 ){
                this.directionX = -this.directionX;
            }
            if(this.y > canvas.height || this.y < 0){
                this.directionY = -this.directionY;
            }


            // check collision detection - mouse position / particle position

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < mouse.radius + this.size){
                if(mouse.x < this.x && this.x < canvas.width - this.size * 10){
                    this.x += 5;
                }
                if(mouse.x > this.x && this.x > this.size * 10){
                    this.x -=5;
                }
                if(mouse.y < this.y && this.y < canvas.height - this.size * 10){
                    this.y += 5;
                }
                if(mouse.y > this.y && this.y > this.size * 10){
                    this.y -= 10;
                }

            }

            // Move particles
            this.x += this.directionX * 0.1;
            this.y += this.directionY * 0.1;
            // draw particles
            this.draw();

        }
    }

    // create particle array
    function  init(){
        
        particlesArray = [];
        // let numberOfParticles = ((canvas.height / 2) * (canvas.width / 2)) / 9000;
        let numberOfParticles = 35;
        for (let i = 0; i < numberOfParticles; i++) {
            const element = numberOfParticles[i];

            let size = (Math.random() *  (71 - 35) + 35) + 1;
            let x = (Math.random() * ((canvas.parentElement.offsetWidth - size * 2) - (size *2)) + size * 2);
            let y = (Math.random() * ((canvas.parentElement.offsetHeight - size * 2) - (size *2)) + size * 2);
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = '#8c5523';

            particlesArray.push(new Particle(shapeArr[0], x, y, directionX, directionY, size, color));
        }
    }

    // animation

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            const element = particlesArray[i];

            particlesArray[i].update();
            
        }
    }


    main.innerHTML = productScreen.render();

    setTimeout(() => {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;    
    }, 1000);
    

    init();
    animate();

    body.addEventListener('click', function(e){
        if(e.target.classList.contains('nextPage')){
            main.classList.add("fade");
            setTimeout(() => {
                main.classList.remove("fade");
            }, 500);
            if(page ===  data.projects.length - 1){
                page = 0;
                siteFooter.classList.remove("prev");
            }else{
                page++;
                siteFooter.classList.add("prev");
            } 
    
            main.innerHTML = productScreen.render();
            actualPage.innerHTML = Number(page)+1;
            window.scrollTo(0, 0);
            setTimeout(() => {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;    
            }, 1000);
        }

        if(e.target.classList.contains('prevPage')){
            main.classList.add("fade");
            setTimeout(() => {
                main.classList.remove("fade");
            }, 500);
            if(page ===  1){
                siteFooter.classList.remove("prev");
                page--;
            }else{
                page--;
                siteFooter.classList.add("prev");
            } 
    
            main.innerHTML = productScreen.render();
            actualPage.innerHTML = Number(page)+1;
            window.scrollTo(0, 0);
            setTimeout(() => {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;    
            }, 1000);
        }

        if(e.target.classList.contains('burger') || e.target.classList.contains('line')){
            if(burger.classList.contains('active') ){ 
                burger.classList.remove('active');
                contHeader.classList.remove('open');
                

                setTimeout(() => {
                    siteMenu.classList.remove("open");
                }, 1100);
                boxTransition.forEach((box)=>{
                     
                    box.classList.add("open");
                    setTimeout(() => {
                       box.classList.remove("open");
                       body.classList.remove("scroll");
                    }, 1100);
                })
                
            }else{
                contHeader.classList.add('open');
                 burger.classList.add('active');
                 body.classList.add("scroll");
                 setTimeout(() => {
                    siteMenu.classList.add("open");
                }, 1100);
                 boxTransition.forEach((box)=>{
                     
                     box.classList.add("open");
                     setTimeout(() => {
                        box.classList.remove("open");
                     }, 1100);
                 })
            }
        }

    });

    


    

    window.addEventListener('resize', function(){
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        init();
    })
}







window.addEventListener('load', router);