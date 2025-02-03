import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Exvertixe - Design & Marketing</title>
        <meta
          name="description"
          content="Exvertixe is a Maldives-based graphic design, marketing, and web development company, specializing in creative solutions to boost your brand."
        />
        <meta
          property="og:title"
          content="Exvertixe - Design &amp; Marketing"
        />
        <meta
          property="og:description"
          content="Exvertixe is a Maldives-based graphic design, marketing, and web development company, specializing in creative solutions to boost your brand."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/eb44aea8-c061-46c7-9f2c-42131891044e/22af9c3c-2b9d-4e54-a523-be08f97a25c6?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#testimonials</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Case Studies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Testimonials</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        logoSrc="/img/exvertixe-logo1-1500h.png"
        link1Url="index.html"
        link2Url="sevices.html"
        link3Url="contact.html"
        page1Description={
          <Fragment>
            <span className="home-text110">
              Explore our services and offerings.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Discover the range of marketing services we provide.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Check out our successful client projects.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Read what our clients have to say about us.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              We are a full-service marketing agency dedicated to helping
              businesses grow their online presence and reach their target
              audience.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to Our Marketing Services
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Graphic Design</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Web Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Marketing Services</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Creative and professional graphic design services to elevate your
              brand.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Custom web development solutions to enhance your online presence.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Effective marketing strategies tailored to your business needs.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let&apos;s work together to create stunning designs and effective
              marketing strategies.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Ready to elevate your brand?</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Graphic Design</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Web Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Marketing Services</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Our team of talented graphic designers will bring your brand to
              life with stunning visuals that captivate your audience.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              We specialize in creating responsive and user-friendly websites
              that enhance your online presence and drive results.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              From social media management to SEO strategies, we offer a range
              of marketing services to help your business grow.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$299/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$1999/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$2999/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Custom Graphic Design</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Website Development</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Social Media Marketing</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Advanced Graphic Design</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">E-commerce Development</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">SEO Optimization</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Premium Graphic Design</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Custom App Development</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Email Marketing Campaigns</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Customized Strategy</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Implementation</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Monitoring and Optimization</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              We start by understanding your business goals and objectives in an
              initial consultation.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Based on the consultation, we develop a customized marketing
              strategy tailored to your specific needs.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Our team executes the marketing strategy using a combination of
              graphic design, web development, and other marketing services.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              We continuously monitor the performance of the campaigns and
              optimize them for better results.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Marketing Services exceeded our expectations in every way. They
              were professional, responsive, and delivered outstanding results.
              I highly recommend their services.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              I have worked with many marketing agencies in the past, but
              Marketing Services stands out from the rest. Their attention to
              detail and strategic approach have been instrumental in our
              success.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              I cannot thank Marketing Services enough for their dedication and
              hard work. They truly care about their clients&apos; success and
              go above and beyond to deliver exceptional results.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Choosing Marketing Services was one of the best decisions we made
              for our business. Their innovative ideas and strategic planning
              have significantly boosted our sales and brand visibility.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Working with Marketing Services has been a game-changer for our
              business. Their expertise and creativity have helped us reach new
              heights in our marketing campaigns.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Client Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Marketing Manager, Company XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Founder, Startup123</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Director of Sales, Company DEF</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Get in touch with us to discuss your project or any inquiries you
              may have.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Los Angeles Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              123 Marketing Street, Suite 101, New York, NY 10001
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              456 Design Avenue, 2nd Floor, Los Angeles, CA 90001
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Case Studies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Testimonials</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        logoSrc="/img/exvertixe-logo-banner-1500h.png"
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
