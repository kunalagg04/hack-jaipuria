import React from 'react';
import './Faq.css';
import $ from 'jquery';

class Faq extends React.Component{

    componentDidMount(){
        // $(document).ready(function(){
        //     $(".accordian-ques").click(function(){
        //       $("#c1").slideToggle("fast");
        //     });
        //   });

        const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


    }

    render(){
        return(
            <div className="faq">
                <div className="head">
                    FAQ
                </div>

                <div className="content">

                {/* <div class="accordion">
    <div class="accordion-item" >
      <div class="accordian-ques" >What are the pre-requisites for the course? <i class="fas fa-plus" onClick={this.answera}></i><i class="fas fa-minus" onClick={this.questiona}></i></div>
      <div class="contenta" id="c1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
      </div>
    </div>
    <div class="accordion-item" >
    <div class="accordian-ques">What should I expect from this course? <i class="fas fa-plus" onClick={this.answerb}></i><i class="fas fa-minus" onClick={this.questionb}></i></div>
    
      <div class="contenta"  id="c2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
      </div>
    </div>
    <div class="accordion-item" >
    <div class="accordian-ques">What is the validity of certificate? <i class="fas fa-plus" onClick={this.answerc}></i><i class="fas fa-minus" onClick={this.questionc}></i></div>
      <div class="contenta"  id="c3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
      </div> */}


<div class="container">

<h2>Frequently Asked Questions</h2>

<div class="accordion">
  <div class="accordion-item">
    <a>Why is the moon sometimes out during the day?</a>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
    </div>
  </div>
  <div class="accordion-item">
    <a>Why is the sky blue?</a>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
    </div>
  </div>
  <div class="accordion-item">
    <a>Will we ever discover aliens?</a>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
    </div>
  </div>
  <div class="accordion-item">
    <a>How much does the Earth weigh?</a>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
    </div>
  </div>
  <div class="accordion-item">
    <a>How do airplanes stay up?</a>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
    </div>
  </div>
</div>

</div>


    </div>
 
  </div>
                   
               

        );
    }
}

export default Faq;