import React from "react";

export default function GDPR() {
  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10 mt-32">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-8">
        GDPR Compliance
      </h1>

      {/* Card 1 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 mb-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          Your Rights Under GDPR
        </h2>

        <ul className="space-y-2 text-gray-400 text-sm">
          <li>• The right to access your personal data</li>
          <li>• The right to rectification</li>
          <li>• The right to erasure</li>
          <li>• The right to restrict processing</li>
          <li>• The right to data portability</li>
          <li>• The right to object</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 mb-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          Data We Collect
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          We collect and process your personal data only when necessary and with your consent. This may include:
        </p>

        <ul className="space-y-2 text-gray-400 text-sm">
          <li>• Contact information</li>
          <li>• Account details</li>
          <li>• Transaction history</li>
          <li>• Usage data</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          Contact Us
        </h2>

        <p className="text-gray-400 text-sm mb-3">
          For any GDPR-related inquiries or to exercise your rights, please contact our Data Protection Officer at:
        </p>

        <a
          href="mailto:privacy@m5dex.com"
          className="text-cyan-400 text-sm hover:underline"
        >
          privacy@m5dex.com
        </a>
      </div>

    </div>
  );
}