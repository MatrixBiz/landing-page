import { Outlet } from 'react-router-dom';
import '../index.css';

export default function Root() {
  return (
    <div className="min-h-screen bg-[#DADADC]">
      <Outlet /> {}
    </div>
  );
}