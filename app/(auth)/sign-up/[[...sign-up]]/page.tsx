import { SignUp } from '@clerk/nextjs';
import React from 'react';

export async function generateStaticParams() {
    return [{ signUp: [] }];
  }
  
  export default function SignUpPage() {
    return <SignUp />;
  }