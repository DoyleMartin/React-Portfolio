import React from 'react';

const AboutMe = () => (
  <div className="container mt-5">
    <div className="text-center mb-4">
      <img
        src="https://via.placeholder.com/150"
        alt="Avatar"
        className="rounded-circle img-fluid"
        style={{ width: '150px', height: '150px' }}
      />
    </div>
    <h2>About Doyle</h2>
    <p className="lead mb-4">
      I'm a passionate and dedicated Full-Stack Developer currently enrolled in the Columbia Engineering Coding Bootcamp, where I'm honing my skills in JavaScript, TypeScript, React, and more. With a strong focus on building responsive and user-friendly web applications, I enjoy transforming creative ideas into seamless digital experiences.
    </p>

    <p className="lead mb-4">
      I’m also working at Piviot, where I create detailed prospect briefs, sharpening my research and analytical skills. My journey in tech is driven by curiosity and a desire to continuously improve and expand my skill set.
    </p>

    <p className="lead">
      When I'm not coding, you can find me planning my next travel adventure or experimenting with new creative projects.
    </p>
  </div>
);

export default AboutMe;
