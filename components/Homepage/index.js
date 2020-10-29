import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { Link } from 'next/router'

import WhiteSpace from './WhiteSpace'

// import { Link } from 'react-router-dom'
import './index.less'

const HomePage = () => {
  return (
    <main
      style={{
        width: '85%',
        margin: '0 auto',
      }}
    >
      <div className="main">
        <section className="heading-section">
          <h1>
            Welcome to your creative hub!
            <br />
            Get inspired and stay <br />
            connected
          </h1>
          <div>
            <button>
              <a href="/reservation" data-test="reservation-link">
                Reserve a spot now
                <span>
                  <Image
                    src="/images/arrow_main.png"
                    alt="arrow icon"
                    unsized
                  />
                </span>
              </a>
            </button>

            <button>
              <a href="/donate">
                Consider a donation
                <span>
                  <Image
                    src="/images/arrow_main.png"
                    alt="arrow icon"
                    unsized
                  />
                </span>
              </a>
            </button>
            <button>
              <a href="https://bridgegood.org/about">
                Learn more about us
                <span>
                  <Image
                    src="/images/arrow_main.png"
                    alt="arrow icon"
                    unsized
                  />
                </span>
              </a>
            </button>
          </div>
        </section>
        <section className="img-section">
          <Image src="/images/hero_main.png" alt="Hero Image" unsized />
        </section>
      </div>

      <div className="mission">
        <section className="mission-left">
          <p>OUR MISSION</p>
          <div>
            <h2>
              Oakland’s FIRST tech-for-good,
              <br /> community-access co-working <br />
              space and education center
            </h2>
            <Image
              src="/images/bluelocationicon.png"
              alt="location icon"
              unsized
            />
            <span>95 Washington St, Oakland CA 94607</span>
          </div>
        </section>
        <section className="mission-right">
          <p>
            Starting a career in design can be intimidating without a strong,
            supportive network. The BRIDGEGOOD Creative Studio brings together
            students of diverse background with common passion in design.
          </p>
          <p>
            Nobody will be turned away because of financial restraints. That’s
            why we are counting on your support to help make a lasting
            difference for the students in the Bay Area.
          </p>
          <div>
            <button>
              <Link href="/donate">Pay It Forward</Link>
            </button>
            <span>
              <a href="https://bridgegood.org/impact/">
                HOW WE ARE HELPING IMPROVE DESIGN INCLUSION
              </a>
            </span>
            <Image src="/images/polygon.png" alt="Polygon Icon" unsized />
          </div>
        </section>
      </div>

      <WhiteSpace />

      <section className="WhoWeServe">
        <p>WHO WE SERVE</p>
        <div className="SubWhoWeServe">
          <div>
            <Image src="/images/support_1.png" alt="Creatives Image" unsized />
            <h3>Schools in Northern California</h3>
          </div>
          <div>
            <Image src="/images/support_2.png" alt="Creatives Image" unsized />
            <h3>Black, Indigenous, People of Color</h3>
          </div>
          <div>
            <Image src="/images/support_3.png" alt="Creatives Image" unsized />
            <h3>BRIDGEGOOD Creatives</h3>
          </div>
        </div>
      </section>

      <WhiteSpace />

      <section className="FAQ">
        <h4>FREQUENTLY ASKED QUESTIONS</h4>
        <div>
          <h2>How do I come to do work at this awesome space?</h2>
          <p>
            Sign up for an account with your BRIDGEGOOD creative username then
            click “Reserve a spot” to find a date and time that works for you.
            You can also just show up to our Creative Studio located in Jack
            London Square of Oakland to find out more.
          </p>
        </div>
        <div>
          <h2>
            I’m a student and don’t currently have a job. Do I have to pay to
            come here?
          </h2>
          <p>
            Don’t worry! Everyone is welcomed at the Studio and won’t be turned
            away for lack of funds. Our Studio operates on pay-what-you-want
            donation basis and you can always choose to give back once you get a
            job :)
          </p>
        </div>
        <div>
          <h2>
            Do I have to be a full-time student to come here? How do you verify
            my student identity?{' '}
          </h2>
          <p>
            While we verify your student identify via your student ID at the
            door and .edu email address, we also welcome recent graduates or
            bootcamp students to use our space for collaboration and networking
            opportunities. Feel free to email us directly for more information.
          </p>
        </div>
      </section>

      <WhiteSpace />

      <section className="Supporters">
        <h4>BRIDGEGOOD SUPPORTERS</h4>
        <div className="Logos">
          <div>
            <Image
              src="/images/golden_state.png"
              alt="Golden State image"
              unsized
            />
          </div>
          <div>
            <Image src="/images/google.png" alt="Google Logo" unsized />
          </div>
          <div>
            <Image src="/images/adobe.png" alt="Adobe Logo" unsized />
          </div>
          <div>
            <Image src="/images/twitter.png" alt="Twitter Logo" unsized />
          </div>
        </div>
      </section>

      <WhiteSpace />
      
    </main>
  )
}

export default HomePage
