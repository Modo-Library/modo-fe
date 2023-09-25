import { createPortal } from 'react-dom';
import React from 'react';

export default function NavigationPortal({ children }: { children: React.ReactNode }) {
  const navigationElement = document.getElementById('navigation');
  return navigationElement ? createPortal(children, navigationElement) : null;
}
