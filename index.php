<?php include 'headerNav.php';?>
    <main>
    <div class="showcase"></div>
      <div class="content">
        <div class="title">Welcome to MAD Studio Website</div>
        <div class="text">Do you want to learn more? Contact us and you will not be disappointed.</div>
        <button id="modalBtn" class="button" >Contact us</button>
      </div>
     
      <div id="simpleModal" class="modal" >
        <div class="modal-content">
               <span class="closeBtn">&times;</span>
               <h2 id="getInTHeading">Get in touch</h2>
               <p id="ask">Please complete the form below. We'd loved to hear from you!</p>
               <form action="contactUs.html" method="post" name="contactUsForm">
                  <div class="form">
                     <label for="name" class="above">&lowast;Full Name:</label>
                     <input type="text" name="c_Name" id="name"
                        placeholder="Full Name">
                     <div id="errMsg"></div>
                  </div>
                  <div class="form">
                     <label for="phone" class="above">&lowast;Phone Number:</label>
                     <input type="text" name="c_Phone" id="phone"
                        placeholder="Phone Number">
                     <div id="errMsgP"></div>
                  </div>
                  <div class="form">
                     <label for="email" class="above">&lowast;Email:</label>
                     <input type="text" name="c_Email" id="email"
                        placeholder="Email">
                     <div id="errMsgEm"></div>
                  </div>
                  <div class="form">
                     <label for="msg" class="above">Comments:</label>
                     <textarea name="c_Message" id="msg"></textarea>
                  </div>
                  <div class="form">
                    <label for="age">Age:</label>
 			              <select id="age" name="age">
 				             <option value="" selected>-Select-</option>
 				          	 <option value="group1">20-29</option>
 				          	 <option value="group2">30-39</option>
 				          	 <option value="group3">40-49</option>
 					           <option value="group4">50+</option>
 		            	  </select>
                  </div>
                  <div class="form">
                    <legend>Receive our newsletter:</legend>
				            <input type="radio"  id="yes" name="consent" value="y">
				            <label for="yes">Yes</label>
				            <input type="radio"  id="no" name="consent" value="n">
                    <label for="no">No</label>
                   </div>
                   <div id="errMsgCons"></div>
                  <div>
                     <button type="submit" id="submit" name="submit">Submit</button>
                  </div>
                  <p>&lowast; required fields</p>
               </form>
               <div id="thanks_msg">
                  <h3>Thank you <span id="thanksCustomer"></span> for your comment!</h3>
               </div>
            </div> 
        </div>
    </main>
   <?php include 'footer.php';?>
   