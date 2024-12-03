import { SignIn } from '@clerk/nextjs';
import React from 'react';

export async function generateStaticParams() {
    return [{ signIn: [] }];
}

export default function SignUpPage() {
    return <SignIn />;
}