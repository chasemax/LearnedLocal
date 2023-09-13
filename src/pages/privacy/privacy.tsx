import { useUser } from "@clerk/nextjs";
import React from "react";
import NavBar from "~/components/NavBar/NavBar";

const Privacy = () => {
  const user = useUser();

  return (
    <>
      <NavBar isSignedIn={user.isSignedIn ?? false} className="bg-white" />
      <div className="container mx-auto p-4">
        <div className="card">
          <h1 className="card-title text-2xl">
            Privacy Policy for Learned Local
          </h1>
          <p>
            <strong>Last Updated: [Date]</strong>
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">Introduction</h2>
          <p>
            Welcome to Learned Local. We respect your privacy and are committed
            to protecting your personal information. This Privacy Policy
            outlines how we collect, use, and disclose your information when you
            visit our website or use our services.
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">Information We Collect</h2>
          <h3 className="text-lg">Personal Information</h3>
          <p>
            When you register for an account, we may ask for your contact
            information, including items such as name, email address, and
            telephone number.
          </p>

          <h3 className="text-lg">Usage Data</h3>
          <p>
            We collect information on how our website is accessed and used. This
            may include your computer's Internet Protocol address, browser type,
            and the pages you visit.
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions</li>
            <li>Send periodic emails and updates</li>
            <li>Monitor and analyze usage and trends</li>
          </ul>

          <div className="divider"></div>

          <h2 className="text-xl">How We Share Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with trusted third parties
            who assist us in operating our website, conducting our business, or
            serving our users.
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">Cookies</h2>
          <p>
            We use cookies to understand and save your preferences for future
            visits and compile aggregate data about site traffic.
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information.
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <div className="divider"></div>

          <h2 className="text-xl">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at [Contact Information].
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
