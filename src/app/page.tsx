import React from 'react';
import { Navbar } from '@/components/Navbar';
import { CoverInteractive } from '@/components/CoverInteractive';

export default function RootCoverPage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white flex flex-col justify-between">
      <Navbar lang="en" />
      <CoverInteractive lang="en" />
    </div>
  );
}
