import React from 'react';

const Resume = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">My Resume</h2>
      <div className="text-center">
        <a
          href='https://docs.google.com/document/d/e/2PACX-1vSInDZBf2ZdVnD7kGoigu9CSuOXTeBLXemLiGvkiBTU8LSm83ZZpa4K0ADRWjvSkg/pub'
          download
          className="btn btn-primary"
        >
          Download Resume (PDF)
        </a>
      </div>

      <div className="embed-responsive embed-responsive-16by9 mb-4">
        <iframe
          className="embed-responsive-item"
          src='https://docs.google.com/document/d/e/2PACX-1vSInDZBf2ZdVnD7kGoigu9CSuOXTeBLXemLiGvkiBTU8LSm83ZZpa4K0ADRWjvSkg/pub'
          title="Resume"
          style={{width: '100%', height: '90vh', border: 'none', padding: '0.5rem'}}
        />
      </div>

    </section>
  );
};

export default Resume;
