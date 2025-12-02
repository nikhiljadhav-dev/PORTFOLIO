// SocialIcons.jsx
import React from "react";

/**
 * Simple presentational component for social icons.
 * Uses <a> with target="_blank" + rel to open safely in new tab.
 */
export default function SocialIcons({ className = "" }) {
  return (
    <div className={`social-icons ${className}`}>
      <a
        href="https://github.com/nikhiljadhav-dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub profile"
      >
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/3d-fluency/94/github-logo.png"
          alt="github-logo"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/nikhil-jadhav-497375323/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open LinkedIn profile"
      >
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/fluency/48/linkedin.png"
          alt="LinkedIn"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.facebook.com/Nikhill.Jadhav/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Facebook profile"
      >
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/color/48/facebook-new.png"
          alt="Facebook logo"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.instagram.com/nikhill.jadhavv/?next=%2F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Instagram profile"
      >
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/3d-fluency/94/instagram-logo.png"
          alt="Instagram logo"
          loading="lazy"
        />
      </a>
    </div>
  );
}
