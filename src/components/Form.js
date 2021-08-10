import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_l65jsij', 'template_5oig47a', e.target, 'user_UkhjiDiskHfICpG7CpvOx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className="container m-auto relative my-12 lg:my-28">
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 p-4 lg:p-0">
            <div className="w-full lg:w-1/2 relative z-10">
                <h2 className="text-2xl lg:text-4xl font-heading mb-2 lg:mb-8 text-blue-extradark capitalize leading-normal">Lorem ipsum adipisicing explicabo consectetu</h2>
                <p className="opacity-80 my-4 font-body text-blue-extradark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus deleniti ullam enim explicabo aut vero quia, perferendis minus adipisci facilis unde tenetur</p>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-14">
                <form className="contact-form w-full" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <div className="mb-4 pt-0">
                        <label className="mb-2 block font-heading font-blue-extradark">Full Name</label>
                        <input name="user_name" type="text" placeholder="John Smith" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border outline-none focus:outline-none ring-blue-medium focus:ring w-full"/>
                    </div>
                    <div className="mb-4 pt-0">
                        <label className="mb-2 block font-heading font-blue-extradark">Email</label>
                        <input name="user_email" type="email" placeholder="jsmith@gmail.com" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border outline-none focus:outline-none focus:ring ring-blue-medium w-full"/>
                    </div>
                    <div className="mb-4 pt-0">
                        <label className="mb-2 block font-heading font-blue-extradark">Message</label>
                        <textarea name="message" placeholder="What can we help with?" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border outline-none focus:outline-none focus:ring ring-blue-medium w-full h-40"/>
                    </div>
                    <input type="submit" value="Send My Message" className="cursor-pointer px-6 py-4 uppercase rounded-lg bg-gradient-to-b from-yellow-medium to-yellow-dark text-blue-extradark my-12 shadow shadow-inner tracking-widest font-heading text-sm flex items-center justify-center gap-2 hover:opacity-90"/>
                </form>
                </div>
        </div>
    </section>
  );
}