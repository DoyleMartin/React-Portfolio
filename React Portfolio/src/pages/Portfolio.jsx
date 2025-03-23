import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      imageUrl: 'https://via.placeholder.com/300', // Replace with your project image URL
      deployedUrl: 'https://example.com', // Replace with the deployed app URL
      githubUrl: 'https://github.com/yourusername/project1', // Replace with the GitHub URL
    },
    {
      title: 'Project 2',
      imageUrl: 'https://via.placeholder.com/300',
      deployedUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      imageUrl: 'https://via.placeholder.com/300',
      deployedUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Project 4',
      imageUrl: 'https://via.placeholder.com/300',
      deployedUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project4',
    },
    {
      title: 'Project 5',
      imageUrl: 'https://via.placeholder.com/300',
      deployedUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project5',
    },
    {
      title: 'Project 6',
      imageUrl: 'https://via.placeholder.com/300',
      deployedUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project6',
    },
  ];

  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Deployed App
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary ms-2"
                >
                  View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
