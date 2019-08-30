import React from 'react';

import './Timeline.css';
import MdPizza from 'react-ionicons/lib/MdPizza';
import MdCodeWorking from 'react-ionicons/lib/MdCodeWorking';
import MdBeer from 'react-ionicons/lib/MdBeer';
import MdPeople from 'react-ionicons/lib/MdPeople';
import MdPaperPlane from 'react-ionicons/lib/MdPaperPlane';
import MdHappy from 'react-ionicons/lib/MdHappy';
import MdBarcode from 'react-ionicons/lib/MdBarcode';
import MdMicrophone from 'react-ionicons/lib/MdMicrophone';

function App() {

	if(document.body.offsetWidth > 600){
  return (
    <div className="timeline">

      <div className="head">
        Schedule
      </div>
     




     <section id="cd-timeline" class="cd-container">

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			{/* <div class="cd-timeline-content">
				<h2>Penta Consulting</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            Front End Developer
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            June 2016 - Present
          </span>
        </div>
				<p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
        <ul class="content-skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Wordpress</li>
        </ul>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div>  */}

			<div class="cd-timeline-content">
				<h2>
				<div style={{marginBottom : "3%"}}>
					--> Hackathon Begins
				</div>
				<div style={{marginBottom : "3%"}}>
					--> Themes announced
				</div>
				<div >
					-->  Announcement Presentation
				</div>
 
</h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p> */}
				<span class="cd-date"> 8:00 AM</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div> 




			<div class="cd-timeline-content">
				<h2> <MdCodeWorking fontSize="4em" color="#46FF66" />  --> Coding Begins</h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p> */}
				<span class="cd-date ev"> 8:30 AM</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div>



			<div class="cd-timeline-content">
				<h2><MdPeople fontSize="3em" color="red" /> --> Mentor Round</h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p> */}
				<span class="cd-date ev"> 10:00 AM</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div> 



			<div class="cd-timeline-content">
				<h2><MdPaperPlane fontSize="3em" color="#FF6646"/>  --> Judgement Round 1</h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p> */}
				<span class="cd-date ev"> 11:30 AM</span>
			</div> 
		</div> 


		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2> <MdPizza shake={true} fontSize="3em" color="orange" /> --> Lunch </h2>
				
				<span class="cd-date">12:30 PM</span>
			</div> 
			</div>

			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2><MdBarcode fontSize="3em" color="#FF4666" />  --> Hackathon Resumes </h2>
				
				<span class="cd-date ev">01:30 PM</span>
			</div> 
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2> <MdBeer shake={true} fontSize="3em" color="brown" /> --> Evening Snacks </h2>
				
				<span class="cd-date ev">06:30 PM</span>
			</div> 
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2> <MdPeople fontSize="3em" color="yellow" /> --> Mentor Round </h2>
				
				<span class="cd-date ev">07:00 PM</span>
			</div> 
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2> <MdPaperPlane fontSize="3em" color="#FF4666"/> --> Judgement Round 2 </h2>
				
				<span class="cd-date ev">08:00 PM</span>
			</div> 
			</div>




			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2> <MdPizza shake={true} fontSize="3em" color="orange" /> --> Dinner </h2>
				
				<span class="cd-date ev">09:00 PM</span>
			</div> 
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2> <MdBarcode fontSize="3em" color="yellow"/> --> Hackathon Resumes </h2>
				
				<span class="cd-date ev">10:00 PM</span>
			</div> 
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2><MdHappy fontSize="3em" color="#46FF66"/>  --> Fun Activities </h2>
			
				<span class="cd-date ev">01:00 AM</span>
			</div> 
			</div>



			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2><MdPaperPlane color="#15f4ee" fontSize="3em" />  --> Judgement Round 3 </h2>
				
				<span class="cd-date ev">06:00 AM</span>
			</div> 
			</div>
			

			<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			
			</div> 
			<div class="cd-timeline-content">
				<h2 > <MdMicrophone beat={true} color="#FF4666" fontSize="3em"/> --> Final Pitch </h2>
				
				<span class="cd-date ev">08:00 AM</span>
			</div> 
			</div>

            
	

			
	 


	</section> 





      
    </div>
  );
		}
		else{
			return(
				<div className="timeline">

				<div className="head">
				  Schedule
				</div>
			   
		  
		  
		  
		  
			   <section id="cd-timeline" class="cd-container">
		  
				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-picture">
					  </div>
		  
					  {/* <div class="cd-timeline-content">
						  <h2>Penta Consulting</h2>
				  <div class="timeline-content-info">
					<span class="timeline-content-info-title">
					  <i class="fa fa-certificate" aria-hidden="true"></i>
					  Front End Developer
					</span>
					<span class="timeline-content-info-date">
					  <i class="fa fa-calendar-o" aria-hidden="true"></i>
					  June 2016 - Present
					</span>
				  </div>
						  <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
				  <ul class="content-skills">
				  <li>HTML5</li>
				  <li>CSS3</li>
				  <li>JavaScript</li>
				  <li>jQuery</li>
				  <li>Wordpress</li>
				  </ul>
					  </div> 
				  </div> 
		  
				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  </div>  */}
		  
					  <div class="cd-timeline-content">
						  <h2>
						  <div style={{marginBottom : "3%"}}>
							  > Hackathon Begins
						  </div>
						  <div style={{marginBottom : "3%"}}>
							  > Themes announced
						  </div>
						
		   
		  </h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p> */}
						  <span class="cd-date"> 8:00 AM</span>
					  </div> 
				  </div> 
		  
				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-picture">
					  </div> 
		  
		  
		  
		  
					  <div class="cd-timeline-content">
						  <h2> <MdCodeWorking fontSize="2em" color="#46FF66" />  > Coding Begins</h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p> */}
						  <span class="cd-date ev"> 8:30 AM</span>
					  </div> 
				  </div> 
		  
				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-location">
					  </div>
		  
		  
		  
					  <div class="cd-timeline-content">
						  <h2><MdPeople fontSize="2em" color="red" /> > Mentor Round</h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p> */}
						  <span class="cd-date ev"> 10:00 AM</span>
					  </div> 
				  </div> 
		  
				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-location">
					  </div> 
		  
		  
		  
					  <div class="cd-timeline-content">
						  <h2><MdPaperPlane fontSize="2em" color="#FF6646"/>  > Judgement Round 1</h2>
						  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p> */}
						  <span class="cd-date ev"> 11:30 AM</span>
					  </div> 
				  </div> 
		  
		  
				  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2> <MdPizza shake={true} fontSize="2em" color="orange" /> > Lunch </h2>
						  
						  <span class="cd-date">12:30 PM</span>
					  </div> 
					  </div>
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2><MdBarcode fontSize="2em" color="#FF4666" />  > Hackathon Resumes </h2>
						  
						  <span class="cd-date ev">01:30 PM</span>
					  </div> 
					  </div>
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2> <MdBeer shake={true} fontSize="2em" color="brown" /> > Evening Snacks </h2>
						  
						  <span class="cd-date ev">06:30 PM</span>
					  </div> 
					  </div>
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2> <MdPeople fontSize="2em" color="yellow" /> > Mentor Round </h2>
						  
						  <span class="cd-date ev">07:00 PM</span>
					  </div> 
					  </div>
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2> <MdPaperPlane fontSize="2em" color="#FF4666"/> > Judgement Round 2 </h2>
						  
						  <span class="cd-date ev">08:00 PM</span>
					  </div> 
					  </div>
		  
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2> <MdPizza shake={true} fontSize="2em" color="orange" /> > Dinner </h2>
						  
						  <span class="cd-date ev">09:00 PM</span>
					  </div> 
					  </div>
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2> <MdBarcode fontSize="2em" color="yellow"/> > Hackathon Resumes </h2>
						  
						  <span class="cd-date ev">10:00 PM</span>
					  </div> 
					  </div>
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2><MdHappy fontSize="2em" color="#46FF66"/>  > Fun Activities </h2>
					  
						  <span class="cd-date ev">01:00 AM</span>
					  </div> 
					  </div>
		  
		  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2><MdPaperPlane color="#15f4ee" fontSize="2em" />  > Judgement Round 3 </h2>
						  
						  <span class="cd-date ev">06:00 AM</span>
					  </div> 
					  </div>
					  
		  
					  <div class="cd-timeline-block">
					  <div class="cd-timeline-img cd-movie">
					  
					  </div> 
					  <div class="cd-timeline-content">
						  <h2 > <MdMicrophone beat={true} color="#FF4666" fontSize="2em"/> > Final Pitch </h2>
						  
						  <span class="cd-date ev">08:00 AM</span>
					  </div> 
					  </div>
		  
					  
			  
		  
					  
			   
		  
		  
			  </section> 
		  
		  
		  
		  
		  
				
			  </div>
			);

		}
}

export default App;
