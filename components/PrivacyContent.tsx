export default function PrivacyContent() {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed font-inter">
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jost">Privacy Policy</h3>
        <p className="mb-4">
          At Bins, we're committed to protecting your privacy and being transparent about how we 
          collect, use, and share your information. This Privacy Policy explains our practices.
        </p>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">Information We Collect</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Account Information:</strong> Name, email address, phone number, and profile photo</li>
          <li><strong>Transaction Data:</strong> Purchase history, listings, payment information, and shipping addresses</li>
          <li><strong>Usage Information:</strong> How you interact with our app, device information, and IP address</li>
          <li><strong>Communications:</strong> Messages between users and correspondence with support</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">How We Use Your Information</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide and improve our marketplace services</li>
          <li>Process transactions and send notifications</li>
          <li>Prevent fraud and ensure platform security</li>
          <li>Provide customer support and resolve disputes</li>
          <li>Send important updates about our services</li>
          <li>Analyze usage patterns to enhance user experience</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">Information Sharing</h4>
        <p className="mb-3">We only share your information when necessary:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>With Other Users:</strong> Basic profile info and listings you create</li>
          <li><strong>Service Providers:</strong> Payment processors, shipping companies, and cloud storage</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our users</li>
          <li><strong>Business Transfers:</strong> In case of merger or acquisition</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">Data Security</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>All data is encrypted in transit and at rest</li>
          <li>We use industry-standard security measures</li>
          <li>Regular security audits and monitoring</li>
          <li>Limited access to personal information by employees</li>
          <li>Secure payment processing through certified partners</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">Your Rights and Choices</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access and update your personal information</li>
          <li>Delete your account and associated data</li>
          <li>Opt out of non-essential communications</li>
          <li>Request a copy of your data</li>
          <li>Report privacy concerns to our team</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">Data Retention</h4>
        <p>
          We keep your information only as long as necessary to provide our services and comply 
          with legal obligations. Account data is typically deleted within 30 days of account closure, 
          except for transaction records which may be retained longer for tax and legal purposes.
        </p>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">Children's Privacy</h4>
        <p>
          Our service is not intended for users under 18. We don't knowingly collect personal 
          information from children. If you're a parent and believe your child has provided 
          us with personal information, please contact us immediately.
        </p>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">International Users</h4>
        <p>
          If you're accessing Bins from outside the United States, please note that your 
          information may be transferred to, stored, and processed in the US where our servers 
          are located and our central database is operated.
        </p>
      </section>

      <section className="text-sm text-gray-600">
        <p>Last updated: January 2024</p>
        <p className="mt-2">
          For questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:privacy@bins.app" className="text-blue-600 hover:underline">
            privacy@bins.app
          </a>
        </p>
      </section>
    </div>
  )
}
