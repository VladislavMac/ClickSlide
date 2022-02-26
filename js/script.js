const container   = document.querySelector('.container');

const allImg = {
               'Mountains River Forest' : 'https://drasler.ru/wp-content/uploads/2019/05/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8-%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE-%D1%81%D1%82%D0%BE%D0%BB%D0%B0018.jpg',
               'Tree + sunset'          : 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/283114741.jpg',
               'Forest in the mountains': 'https://img4.goodfon.ru/wallpaper/nbig/6/42/priroda-peizazh-fioletovyi-zakat.jpg',
               'Small forest mountains' : 'https://img1.goodfon.ru/wallpaper/nbig/0/b9/osenniy-gornyy-peyzazh-oboi-na.jpg',
               'Tree little mountains'  : 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/126461350.jpg',
             }

function addSlides(){
    for( let key in allImg ){
        container.innerHTML += `
            <div
            class='slide'
            style='background-image: url(${allImg[key]})'>
                <h3>${key}</h3>
            </div>  
                        `
    }
}
addSlides();

const slides = document.querySelectorAll('.slide');
             
function selectClass(){
    for( let i = 0; i < slides.length; i++){
        slides[i].addEventListener('click', () =>{
            clearActiveClass(); // clear select elem
            slides[i].classList.add('active'); // select this block
        })
    }
}
selectClass()

function clearActiveClass(){
    slides.forEach((elem) => {
        elem.classList.remove('active')
    })
}
