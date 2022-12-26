import React from "react";

const GoogleMap = () => {
  return (
    <div className="mid-container border-2 mb-16">
      <div className="">
        <iframe
          src=" https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14657.034375610008!2d90.9478632!3d23.3063746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb551746d7a601d3c!2sBasic%20Hospital%20Ltd.!5e0!3m2!1sen!2sbd!4v1665489016856!5m2!1sen!2sbd"
          width="100%"
          height="500"
          frameBorder="0"
          // style="border:0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
