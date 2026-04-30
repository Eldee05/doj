// components/MainContent.jsx
// Main informational content — four collapsible accordion sections

import Accordion from "./Accordion";
import { SubHeading } from "./Typography";
import "../styles/components.css";

export default function MainContent() {
  return (
    <div
      className="right-content"
      style={{ flex: "1 1 200px", minWidth: "100px" }}
    >
      {/* ── 1. Introduction ───────────────────────────── */}
      <Accordion
        className="main-accordion"
        title="Introduction"
        defaultOpen={true}
      >
        <p>
          The Department of Justice (DOJ) and other federal agencies are
          committed to ensuring that victims of federal crime are treated fairly
          as their case moves through the criminal justice system. In order to
          provide victims with information on case events, as required by the
          Victims' Rights and Restitution Act and the Crime Victims' Rights Act,
          DOJ has developed the Victim Notification System (VNS). This website
          provides information about VNS.
        </p>
        <p>
          VNS is funded by the DOJ Office for Victims of Crime (OVC), Crime
          Victims Fund. The Fund was established by the Victims of Crime Act
          (VOCA) of 1984. The Fund is financed by fines and penalties paid by
          convicted federal offenders, not from tax dollars.
        </p>
        <p>
          This free automated system provides important information to victims.
          In many cases, you will receive letters/emails generated through VNS
          containing information about the events pertaining to your case and/or
          any defendants in the case.
        </p>
        <p>
          Information provided by VNS is available in English or Spanish on the
          Internet and through a toll-free telephone number (Call Center). In
          cases with a large number of victims, you may receive only one letter
          and then be directed to the Internet, Call Center and/or requested to
          provide a verified email address for further information.
        </p>
        <p>
          All VNS notifications contain a Victim Identification Number (VIN) and
          a Personal Identification Number (PIN) that will allow you to access
          VNS via the internet and the Call Center.
        </p>
      </Accordion>

      {/* ── 2. VNS Internet ───────────────────────────── */}
      <Accordion title="VNS Internet">
        <p>
          You can register with VNS, which will then provide you access to all
          VNS information and allow you to verify or add an email address. To
          access the VNS Internet go to:{" "}
          <a href="https://www.Notify.USDOJ.gov">
            https://www.Notify.USDOJ.gov
          </a>
        </p>
        <ol>
          <li>Enter your VIN.</li>
          <li>Enter your PIN.</li>
          <li>
            Complete the remaining information as requested on the Web site,
            including creating a new VNS password. This password will replace
            your PIN when accessing the VNS website in the future.
          </li>
        </ol>

        <SubHeading>Verifying your Email Address</SubHeading>
        <p>Email can be verified during the registration process.</p>
        <ul>
          <li>
            When you add your email address it is considered verified, and your
            email can be used instead of the VIN when logging into VNS.
          </li>
          <li>
            You can also verify an email address by selecting "Click Here To
            Receive Email Notifications" link from the home page. Verifying your
            email address alone, without registering with VNS will not provide
            access to the VNS website.
          </li>
        </ul>

        <SubHeading>Available Information</SubHeading>
        <p>
          Once you are registered in VNS you can see the text for each
          notification and the additional information listed below:
        </p>
        <ul>
          <li>
            <strong>Summary Information</strong> — Information regarding
            investigative status, criminal charges filed, custody status, the
            outcome of the charges, and the sentence imposed by the court. If
            the defendant is in the custody of Bureau of Prisons the custody
            location and scheduled release date is provided.
          </li>
          <li>
            <strong>Case Activity/Details</strong> — Displays information about
            the events which are occurring in the case(s), including
            investigative status, notices of public court proceedings, notices
            regarding incarceration and/or parole hearings.
          </li>
          <li>
            <strong>Downloads/Links</strong> — A list of all case-specific
            documents and hyperlinks that pertain to the case(s).
          </li>
          <li>
            <strong>My Information</strong> — Provides the ability to update
            your contact information.
          </li>
          <li>
            <strong>Stop Receiving Notifications</strong> — Terminates
            participation in the notification program.
          </li>
        </ul>
        <p>
          If you do not wish to receive notification, you may contact: (1) the
          VNS Call Center (1-866-365-4968, provide your VNS VIN &amp; PIN,
          select Opt Out option); (2) access the VNS website and select the
          "Stop Receiving Notifications" link, or; (3) the agency contact person
          indicated on your notification.
        </p>
      </Accordion>

      {/* ── 3. VNS Notification Methods ───────────────── */}
      <Accordion title="VNS Notification Methods">
        <SubHeading>VNS Letter/Email Notifications</SubHeading>
        <p>
          The first notification generated by VNS will be sent by letter (if VNS
          has a postal mailing address for you) and by email (if VNS has your
          email address). Email will likely be the timeliest method of
          notification provided by VNS. If you "verify" an email address VNS
          will likely send future notifications only by email. If you have a
          verified email address, periodically VNS will send you an email
          requesting you to re-verify this information.
        </p>
        <p>
          The verified email notices contain the same information as letter
          notifications provided by VNS. Verification of your email address
          allows VNS to rely on this method of notification and will eliminate
          future letter notifications. If you prefer to receive notifications
          from VNS via letter only, log in to VNS and remove all existing email
          addresses in the system.
        </p>
        <p>
          If VNS contains your email address and you do not verify that address
          you will continue to receive email notices from VNS about your
          case(s). However, those unverified email notices will no longer
          contain the specific details of the case. To obtain additional
          information, you will be directed to log in at the VNS web site:{" "}
          <a href="https://www.notify.usdoj.gov">
            https://www.notify.usdoj.gov
          </a>
        </p>
        <p>
          Additionally, notices to email addresses which are not verified will
          no longer contain your VNS VIN and PIN.
        </p>

        <SubHeading>VNS Call Center</SubHeading>
        <p>
          You may access information via the VNS Call Center by calling:{" "}
          <strong>1-866-DOJ-4YOU (1-866-365-4968)</strong>. You will be required
          to enter your VIN and PIN.
        </p>
        <p>
          By following the prompts, VNS will also provide investigative status,
          custody information and notice of upcoming court events and a listing
          of any criminal charges filed. There are additional prompts to opt out
          of VNS.
        </p>
        <p>
          Please note that in some rare instances involving custody of an inmate
          with the Federal Bureau of Prisons, VNS may contact you by an
          automated phone call which will require use of your PIN to stop
          receiving further calls.
        </p>
      </Accordion>

      {/* ── 4. Additional Support ─────────────────────── */}
      <Accordion className="last-accordion" title="Additional Support">
        <p>
          If you have additional questions, need to opt out of VNS, or need
          other assistance you can also contact the agency representative listed
          on your last VNS notification.
        </p>
        <p>
          It is your responsibility to keep your information in VNS current.
          This will insure that you continue to receive notifications. If your
          address, email or phone number changes, you should update your contact
          information through the VNS Internet or by contacting the VNS Call
          Center.
        </p>
        <div className="footer-info-box">
          <p>DOJ-USA-260 / March 2015</p>
          <p>
            <strong>United States Department of Justice</strong>
          </p>
          <p>Victim Notification System</p>
          <p>Internet/Automated Call Center - (24 hour access)</p>
          <p>
            <a href="https://www.Notify.USDOJ.gov">
              https://www.Notify.USDOJ.gov
            </a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            1-866-DOJ-4YOU / (1-866-365-4968)
          </p>
          <p>
            <strong>VNS Help Desk Hours (Eastern Time)</strong>
          </p>
          <p>Monday - Friday 6:00 a.m. - 3:00 a.m.</p>
          <p>Saturday 7:00 a.m. - 12:00 a.m.</p>
          <p style={{ margin: 0 }}>Sunday 8:00 a.m. - 12:00 a.m.</p>
        </div>
      </Accordion>

      {/* ── Footer Info Box ───────────────────────────── */}
    </div>
  );
}
