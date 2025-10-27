import React from 'react';
import AuthTabs from '../components/AuthTabs';

function SignupPage() {
  // We render the *same* AuthTabs component
  // and just tell it to show the "signup" tab by default.
  return (
    <AuthTabs defaultTab="signup" />
  );
}

export default SignupPage;