import React from 'react';
import AuthTabs from '../components/AuthTabs';

function LoginPage() {
  // We just render the AuthTabs component
  // and tell it to show the "login" tab by default.
  return (
    <AuthTabs defaultTab="login" />
  );
}

export default LoginPage;