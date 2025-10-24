import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="page-center">
      <h1>Welcome to SkillSync</h1>
      <p>Your AI-powered career recommendation platform.</p>
      <Link to="/signup" className="btn btn-primary">
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;