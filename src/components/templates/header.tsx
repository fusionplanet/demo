// src/components/templates/header.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export const Header = () => {
 return (
  <header>
    <nav className="navbar fixed-top navbar-expand-xl navbar-light bg-light">
        <div className="container d-flex justify-content-between">
            <a id="logo" href="#" className="navbar-brand d-flex align-items-center">
            <span className="octopus-logo"></span>
            Octopus Deploy
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">What&#x27;s New</a>
                    </li>
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">Resources</a>
                    </li>
                    <li className="nav-item">
                        <a href="/blog" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Enterprise</a>
                    </li>
                </ul>
                <div className="navbar-nav ml-auto" id="navbar-sign-in">
                    <a href='/' className='nav-link'>Sign in</a>
                </div>
                <div className="form-inline ml-xl-3 my-3 my-xl-auto" id="navbar-sign-up">
                    <a href="/" className="btn btn-success trial">
                        Start a trial
                        <span>
                            <svg className='hover-arrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                                <g fillRule='evenodd'>
                                    <path className='hover-arrow-line' d='M0 5h7'></path>
                                    <path className='hover-arrow-tip' d='M1 1l4 4-4 4'></path>
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  </header>
  
 );
};


    