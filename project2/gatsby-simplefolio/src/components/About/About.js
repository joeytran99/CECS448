import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let data = this.props.aboutData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h1>About Me</h1>
               <p>
               {
                 data.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{data.name}</span>
                     <br></br>
       						   <span>
                     {data.address}
                    </span>
                    <br></br>
                    <span>{data.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}