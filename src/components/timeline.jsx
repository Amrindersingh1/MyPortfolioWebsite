import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Post Graduation  at Cambrian College<span>2020-prsent</span></h2>
                        <p>Currently I am pursuing Post Graduation in Mobile Application Development at Cambrian College.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at SAP Labs <span>Aug 2017-Dec 2019</span></h2>
                        <p>Worked for Rules as a service that as a part of SAP Cloud Platform and Cloud Foundry offers decision modeling, management and execution services.</p>
                        <p>Worked on performance measurement and improvement of service, at Frontend, backend and database layer, bringing down each request timing under a millisecond.</p>
                        <p>Designed and Implemented REST Apis using Spring Framework for service that previously used ODATA service enabling users to build custom applications and bringing down modeling time.</p>
                        <p>Implemented the DAO layer using Spring Framework and JPA (Java Persistence API) for the whole service that previously used SQL queries that were difficult to maintain and scale. The whole service was provided with the JPA layer for database access making it easy to scale maintain and was later on helpful to use in multi- cloud(SCP & CF) with different databases(Hana & Postgress).</p>
                        <p>Worked on the Javascript-based Frontend application for the service.</p></div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Intern at SAP Labs <span>Aug 2017-Dec 2019</span></h2>
                        <p>Worked on a Tenant management application that was responsible for smooth OnBoarding of tenants on the SAP Cloud platform that was previously done using Jenkin scripts. The application not only allowed concurrent onboarding but also tracking the onboarding process with logs.</p>
                        <p>Implemented the system to run database migrations using Flyway that would run database migrations for all the tenants onboarded providing zero database downtime and proper logs and status for migration steps. The Application also kept track of which tenant is at which database migration state.</p>
                        <p>Implemented UI test framework using OPA for UI application to run automated tests that would test UI App using a mock server.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at Chandigarh University<span>2013-2017</span></h2>
                        <p>I have pursued my under-graduation studies with major in Computer Science and Engineering. 
                          I scored a CGPA of 8.5 in my B.E</p>
                      </div>
                    </div>
                  </article>
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
