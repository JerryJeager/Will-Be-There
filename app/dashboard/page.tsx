"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";


const Dashboard = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  if (sessionStatus !== 'authenticated') {
    router.push('/auth/login');
    return null; // Return null while redirecting
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
