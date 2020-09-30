import React, { Component } from 'react'
const body={
    background:'#ccc',
  };
  const main = {
    fontFamily:'Arial',
    width:'500px',
    display:'block',
    margin:'0 auto',
  };
  
  const h3 = {
      background: '#fff',
      color: '#3498db',
      fontSize: '36px',
      lineHeight: '100px',
      margin: '10px',
      padding: '2%',
      position: 'relative',
      textAlign: 'center',
  };
  const action={
    display:'block',
    margin:'100px auto',
    width:'100%',
    textAlign:'center',
  }
  const actionA = {
    display:'inline-block',
    padding:'5px 10px', 
    background:'#f30',
    color:'#fff',
    textDecoration:'none',
  };
  const actionAhover = {
    background:'#000'
  }
  
  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
  
export default class New extends Component {
    render() {
        return (
            <div>
               <div style={main}>
  <div class="slider slider-for">
    <div><h3 style={h3}>1</h3></div>
    <div><h3 style={h3}>2</h3></div>
    <div><h3 style={h3}>3</h3></div>
    <div><h3 style={h3}>4</h3></div>
    <div><h3 style={h3}>5</h3></div>
  </div>
  <div class="slider slider-nav">
    <div><h3 style={h3}>1</h3></div>
    <div><h3 style={h3}>2</h3></div>
    <div><h3 style={h3}>3</h3></div>
    <div><h3 style={h3}>4</h3></div>
    <div><h3 style={h3}>5</h3></div>
  </div>
  <div style={action}>
    <a style={actionA} href="#" data-slide="3">go to slide 3</a>
    <a style={actionA} href="#" data-slide="4">go to slide 4</a>
    <a style={actionA} href="#" data-slide="5">go to slide 5</a>
  </div>
</div>
            </div>
        )
    }
}
