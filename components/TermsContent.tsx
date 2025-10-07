export default function TermsContent() {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed font-inter">
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jost">Terms of Service</h3>
        <p className="mb-4">
          Welcome to Bins! These Terms of Service ("Terms") govern your use of our marketplace platform 
          and services. By using Bins, you agree to these Terms.
        </p>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">1. Account Registration</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>You must be at least 18 years old to use Bins</li>
          <li>You're responsible for maintaining the security of your account</li>
          <li>You must provide accurate and complete registration information</li>
          <li>You may not share your account credentials with others</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">2. Buying and Selling</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>All items must be accurately described and photographed</li>
          <li>Prohibited items include counterfeit goods, hazardous materials, and illegal substances</li>
          <li>Sellers are responsible for shipping items within 3 business days</li>
          <li>Buyers have 3 days to report issues with received items</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">3. Fees and Payments</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Service fee: 10% of the sale price</li>
          <li>Payment processing fee: 3% of the transaction amount</li>
          <li>Fees are automatically deducted from seller earnings</li>
          <li>Refunds are processed according to our return policy</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">4. User Conduct</h4>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Be respectful and honest in all interactions</li>
          <li>No harassment, discrimination, or abusive behavior</li>
          <li>Don't attempt to circumvent our platform for direct transactions</li>
          <li>Report suspicious activity to our support team</li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">5. Dispute Resolution</h4>
        <p>
          We provide mediation services for disputes between buyers and sellers. Our support team 
          will work to find fair solutions. For serious disputes, binding arbitration may be required.
        </p>
      </section>

      <section>
        <h4 className="text-lg font-medium text-gray-900 mb-3 font-jost">6. Limitation of Liability</h4>
        <p>
          Bins is not liable for disputes between users, lost or damaged items during shipping, 
          or any indirect damages. Our maximum liability is limited to the transaction amount.
        </p>
      </section>

      <section className="text-sm text-gray-600">
        <p>Last updated: January 2024</p>
        <p className="mt-2">
          For questions about these Terms, contact us at{' '}
          <a href="mailto:legal@bins.app" className="text-blue-600 hover:underline">
            legal@bins.app
          </a>
        </p>
      </section>
    </div>
  )
}
