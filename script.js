function myFunction1() {
    document.getElementById("lm1").innerHTML = "Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio omnis praesentium, debitis nesciunt temporibus quas deleniti atque dignissimos dicta, et magni dolorum possimus corporis, nobis quibusdam ex eveniet explicabo officia voluptas. Quisquam, distinctio aliquid corporis quibusdam sed similique obcaecati enim ad porro fuga labore culpa praesentium dolores modi dignissimos quos. Nam assumenda odio eligendi? Aliquam fugiat, repellendus quisquam, consectetur aut harum esse corporis rem inventore provident unde est cumque. Dicta, porro illum assumenda laborum incidunt at velit quam, a, voluptatem eos optio? Beatae est, maiores illo deleniti aliquid perspiciatis voluptatibus quae quos fugiat earum et neque hic. Ea, numquam!";
  }


  //Sweper js

  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = windowWidth <= 560 ? 'vertical' : 'horizontal';

    return direction;
  }
