//1. 모바일 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체. 속성 style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 =  햄버거 메뉴 m_nav 모바일메뉴 m_nav_open
//속성 = display
//이벤트 = 클릭
//메서드 = 
//3. x 버튼 클릭시 모바일 메뉴 숨기기
//객체 = x 버튼 close 모바일메뉴 m_nav_open
//변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close')
//정상출력확인
console.log(m_nav_open,m_nav,close)
//1.모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2.모바일 메뉴 보이기
//객체.이벤트. 햄버거메뉴 클릭시
m_nav.addEventListener('click',function(){
    //모바일메뉴 보이기
    m_nav_open.style.display = 'block';
})
//3.x 버튼 클릭 시 모바일 메뉴 숨기기
close.addEventListener('click',function(){
    //모바일메뉴 숨기기
    m_nav_open.style.display = 'none';
})
// main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide =new Swiper('#pawin_slide',{
    autoplay:{
        delay:2000,//슬라이드 간격(밀리초) 기본 3초
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    },//자동재생
    loop:true, //마지막 슬라이드 ->첫번째 슬라이드 자연스러운 변경
    effect:'fade',//제자리 변경 슬라이드 효과
    // direction:'vertical'
    navigation: {//이전,다음 내비게이션 연결
        //next,prev 객체 연결시 부모를 안 적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기때문에
        //개별인식 가능한 부모 이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
});
const pawinSlide =new Swiper('#pawin_slide2',{
    autoplay:{delay:4000},
    loop:true,
    direction:'vertical',
    navigation: {
        nextEl: '#pawin_slide2 .swiper-button-next',
        prevEl: '#pawin_slide2 .swiper-button-prev',
    },
})
const pawinSlide2 =new Swiper('#pawin_slide3',{
    autoplay:{delay:4000},
    loop:true,
})
const pawin_info_wrapper=new Swiper('#dog_info_slide',{
    slidesPerView:'auto',
    spaceBetween:20,
    loop:true,
    breakpoints: {
        400:{slidesPerView:2},//400~899
        // 700:{slidesPerView:2}/700이상일때
        900:{slidesPerView:3},//900이상일때
        1160:{slidesPerView:4},
    },
})