'use client';
import React from 'react';

export default function BackgroundOnly() {
  return (
    <div className="background-container">
      {/* This component renders only the background visuals, no content */}
      <div className="background-grid" />
      <div className="background-overlay" />
    </div>
  );
}
