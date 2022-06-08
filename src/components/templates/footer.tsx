// src/components/templates/footer.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export const Footer = () => {
return (
<footer className="text-muted py-5">
{/*
Contact sales
<a href="/" className="btn btn-success trial">Contact sales<span><svg className="hover-arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="hover-arrow-line" d="M0 5h7"></path><path className="hover-arrow-tip" d="M1 1l4 4-4 4"></path></g></svg></span></a>

<div className="community-cta d-flex">
<img src="/octopus-public/images/community/community-people.svg" alt="people sitting" className="mh-100 mr-3"/>
<p>
Using Octopus for open source or personal projects? Our Community edition offers the full deployment power of Octopus Server or Cloud with some limitations. 
<a href="/">
Learn more 
<i className="fas fa-chevron-right"></i>
</a>
</p>
</div>


<section className="stripe-white" id="feature-comparison">
<div className="container">
<h2 className="text-center">
<a href="/" className="link-dark" aria-hidden="true">Feature comparison</a>
</h2>
<p className="text-center mx-auto max-w-580 mb-5">
All Octopus Deploy plans have everything needed for your team to create projects, deploy and promote releases,
and achieve continuous delivery for any type of application. Find the right plan for your team below.
</p>
<table className="table pricing-feature-table pricing-community">
<thead>
<tr>
<th></th>
<th className="py-4">
<a href="/pricing/cloud" className="d-inline-block mb-4">Cloud</a>
<p className="text-muted">DevOps automation as-a-service. We host Octopus Deploy in the cloud and manage everything for you.</p>
</th>
<th className="py-4">
<a href="/pricing/server" className="d-inline-block mb-4">Server</a>
<p className="text-muted">Download and install Octopus Deploy in your own data center or private cloud.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Email-based support from our team in multiple timezones, staffed by engineers who work on the product.">
<strong>World-class support team </strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>
<i className="fas fa-check fa-2x color-text-green"></i>
</td>
<td>
<i className="fas fa-check fa-2x color-text-green"></i>
</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Multiple Octopus Server nodes in an active/active, highly available configuration with a load balancer in the front, ensuring you can deploy (or rollback!) 24/7.">
<strong>High availability</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td></td>
<td>
<i className="fas fa-check fa-2x color-text-green"></i>
</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Give each team their own space, with their own projects, environments, tenants, step templates and more. <a href='https://g.octopushq.com/spaces'>Learn more</a>.">
<strong>Spaces</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>Unlimited</td>
<td>Unlimited</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Run one Octopus Deploy service for production usage by your team, and set up extras for dev/test. Or use two separate Octopus Deploy instances to keep production and pre-production deployments isolated.">
<strong>Concurrent Octopus Server instances</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>
1 
<small className="text-gray">
<br/>
(per subscription)
</small>
</td>
<td>
3 
<br/>
</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Maximum number of deployments that can be running at the same time (limited by hardware, of course!)">
<strong>Concurrent deployment tasks</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="<a href='/support'>Contact us</a> to increase your concurrent deployment limit.">Scalable</a>
</abbr>
</td>
<td>
Unlimited
</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Maximum amount of packages, artifacts and task logs that can be stored for your deployments.">
<strong>File storage</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>1 TB</td>
<td>
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Storage for on-premise Servers is only limited by your hardware capacity.">Unlimited</a>
</abbr>
</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Maximum amount of configuration data that can be stored for your deployments.">
<strong>Database storage</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>1 TB</td>
<td>
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Storage for on-premise Servers is only limited by your hardware capacity.">Unlimited</a>
</abbr>
</td>
</tr>
<tr>
<td className="text-left">
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Maximum size of any single package stored for your deployments.">
<strong>Package size</strong>
<i className="fas fa-info-circle text-muted"></i>
</a>
</abbr>
</td>
<td>5 GB</td>
<td>
<abbr>
<a href='#' className='clickable' data-container="body" data-toggle="popover" data-placement="right" data-content="Storage for on-premise Servers is only limited by your hardware capacity.">Unlimited</a>
</abbr>
</td>
</tr>
</tbody>
</table>
<small id="trial-disclaimer" className="text-muted">Trial licenses are valid for 30 days with unlimited targets, and other limits as specified above per-platform.</small>

</div>
</section>
<section className="stripe stripe-white d-print-none">
<div className="container text-center mb-5 mx-auto max-w-640">
<h2 className="fs-34 mb-4">Ready to get started?</h2>
<p className="text-lead fs-18 text-muted mb-5">

Start a free 30 day trial of Octopus Server or Octopus Cloud.
Our 
<a href="/">getting started guides</a>
will walk you through everything required to deploy your first
application. Or contact us to discuss your goals and how Octopus Deploy might help.
</p>
<a className="btn btn-success btn-lg mr-2" href="/start">
Start a trial 
<button>
<svg className='hover-arrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
<g fill-rule='evenodd'>
<path className='hover-arrow-line' d='M0 5h7'></path>
<path className='hover-arrow-tip' d='M1 1l4 4-4 4'></path>
</g>
</svg>
</button>
</a>
<a className="btn btn-light btn-lg mx-2" href="/">Contact us</a>
</div>
</section>
*/}
<footer id="footer" className="stripe stripe-gray d-print-none">
<div className="container">
<div className="row text-center text-md-left mb-5">
<div className="col-lg mb-4 text-center text-lg-left">
<a className="navbar-brand" href="/">
<span className="octopus-logo"></span>
</a>
</div>
<div className="col-6 col-lg link-stack my-4 my-lg-0">
<strong>Product</strong>
<a href="/">Features</a>
<a href="/">What&#x27;s New</a>
<a href="/">Roadmap</a>
<a href="/">Octopus vs. Azure DevOps</a>
<a href="/">Octopus vs. Jenkins</a>
</div>
<div className="col-6 col-lg link-stack my-4 my-lg-0">
<strong>Learn</strong>
<a href="/">Getting Started</a>
<a href="/">Guides</a>
<a href="/">Deployments</a>
<a href="/">Runbooks</a>
<a href="/">Training Videos</a>
</div>
<div className="col-6 col-lg link-stack my-4 my-lg-0">
<strong>Help &amp; Support</strong>
<a href="/">Contact</a>
<a href="/">Help &amp; Support</a>
<a href="/">Community Slack</a>
<a href="/">Discussion Forum</a>
<a href="/">Upgrade &amp; Renew</a>
</div>
<div className="col-6 col-lg link-stack my-4 my-lg-0">
<strong>About Us</strong>
<a href="/">Company</a>
<a href="/">Careers</a>
<a href="/">Webinars &amp; Events</a>
<a href="/">Blog</a>
<a href="/">Stickers &amp; Swag</a>
</div>
</div>
<hr/>
<div className="row footer-bottom-bar">
<div className="col-md text-center text-md-left my-1">
<a href="/">Privacy policy</a>
<a href="/">GDPR</a>
<a href="/">Terms</a>
<a href="/">System Status</a>
</div>
<div className="col-md text-center text-md-left my-1">
<span>Copyright &copy; 2022 Octopus Deploy</span>
</div>
<div className="col-md  text-center text-md-right fs-18">
<a href="https://twitter.com/OctopusDeploy" title="Twitter">
<i className="fab fa-twitter text-dark" title="Twitter"></i>
</a>
<a href="https://www.linkedin.com/company/octopus-deploy" title="LinkedIn">
<i className="fab fa-linkedin text-dark" title="LinkedIn"></i>
</a>
<a href="https://github.com/OctopusDeploy" title="GitHub">
<i className="fab fa-github text-dark" title="GitHub"></i>
</a>
<a href="https://www.youtube.com/c/Octopusdeploy" title="YouTube">
<i className="fab fa-youtube text-dark" title="YouTube"></i>
</a>
</div>
</div>
</div>
</footer>



</footer>
);
};