$(function() {
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
  }); 

  /*アニメーションでリンクホバー時不透明にする*/
  /*ヘッダー*/
  $('a').on('mouseover',function(){
    $(this).animate({
        opacity: 0.5,
    });
  });
  $('a').on('mouseout',function() {
    $(this).animate({
        opacity: 1.0,
    });
  });
  /*Worksのimg*/
  $('.item img').on('mouseover',function(){
    $(this).animate({
        opacity: 0.5,
    });
  });
  $('.item img').on('mouseout',function() {
    $(this).animate({
        opacity: 1.0,
    });
  });

  //TOPボタンが100pxになったら表示する
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('#top-btn').fadeIn();
    } else {
        $('#top-btn').fadeOut();
    }
  });

  //スムーズスクロール
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
        $target = $('html');
    } else {
        $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position } , speed, 'swing');
    return false;
  });

  //スクロール時セクションをフェードイン
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
        const position = $(this).offset().top;
        if (scrollAmount > position - windowHeight + 100) {
            $(this).addClass('fade-in');
        }
    });
});

//worksの画像をクリックした時にモーダルで拡大表示
$('.works img').click(function () {
  const imgSrc = $(this).attr('src');
  const imgAlt = $(this).attr('alt');
  $('.big-img').attr({
    src: imgSrc,
    alt: imgAlt,
  });
  $('.modal').fadeIn();
});
//✖️でモーダルを閉じる
$('.close-btn').click(function () {
  $('.modal').fadeOut();
});
});