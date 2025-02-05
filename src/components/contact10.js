import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="contact10-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text20">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="contact10-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Get in touch with us to discuss your project or any
                    inquiries you may have.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text16">New York Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    123 Marketing Street, Suite 101, New York, NY 10001
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text18">Los Angeles Office</span>
                </Fragment>
              )}
            </h3>
            <p className="contact10-text15 thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text21">
                    456 Design Avenue, 2nd Floor, Los Angeles, CA 90001
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1NjMzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  content1: undefined,
  location2: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1NjMzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location2ImageAlt: 'Los Angeles Office Image',
  location1ImageAlt: 'New York Office Image',
  heading1: undefined,
  location2Description: undefined,
}

Contact10.propTypes = {
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  content1: PropTypes.element,
  location2: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
}

export default Contact10
