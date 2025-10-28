import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-6">Last updated: October 28, 2025</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the SkillSync service, you agree to be bound by these Terms of Service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. User Obligations</h2>
              <p>
                You agree to use our service responsibly and not to misuse it. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Termination</h2>
              <p>
                We may terminate or suspend your access to our service at any time, without prior notice, for conduct that violates these Terms. Curabitur tortor. Pellentesque nibh. Aenean quam.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;