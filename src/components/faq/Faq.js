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
            <div id="faq" className="faq">
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



<div class="accordion">

  <div class="accordion-item">
    <a>When ? </a>
    <div class="content">
      <p>
      HackJaipuria will be a 24 hours hackathon which will stretch from 23rd October to 24th October 2019.
      </p>
      </div>

  </div>

  <div class="accordion-item">
    <a>Where ?</a>
    <div class="content">
      <p> Seth Anandram Jaipuria School , Sector - 14C , Vasundhra , Ghaziabad</p>
    </div>
  </div>
  <div class="accordion-item">
    <a> Is their arrangement for food?</a>
    <div class="content">
      <p> Yes. Absolutely. You will be provided with proper meals. Thanks to our sponsors. </p>
    </div>
  </div>
  <div class="accordion-item">
    <a> What is the registration fee?</a>
    <div class="content">
      <p> There is no registration fee .</p>
    </div>
  </div>

  <div class="accordion-item">
    <a>What do I bring with me to the event?</a>
    <div class="content">
      <p>You are required to bring your school/college ID, laptops, phone, chargers and extension board.</p>
    </div>
  </div>

  <div class="accordion-item">
    <a>How big can my team be?</a>
    <div class="content">
      <p> Team must consist of 4 team members max and 2 min.</p>
    </div>
  </div>

  <div class="accordion-item">
    <a>What's the criteria for judgement?</a>
    <div class="content">
      <p>
        <ul>
          <li>
          Concept: New/interesting concepts used would be appreciated.

          </li>

          <li>
          Design/Feasibility: The project made should be feasible.
   </li>

          <li>
          Innovation: Innovative ideas are always welcome, and would be greatly appreciated.

          </li>

          <li>
          Functional Scope: The project should be working.


          </li>

          <li>
          Presentation: As the saying goes, extra marks for good handwriting (figuratively speaking).

          </li>

        </ul>
      </p>
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