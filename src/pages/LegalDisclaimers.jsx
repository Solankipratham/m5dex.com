import React from "react";

export default function LegalDisclaimers() {
  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10 mt-32">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-8">
        Legal Disclaimers
      </h1>

      {/* Card 1 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 mb-6 shadow-lg">
        <h2 className="text-sm font-semibold mb-3 uppercase text-gray-300">
          Notice to Residents of the United States
        </h2>

        <p className="text-gray-400 text-xs leading-relaxed uppercase">
          The offer and sale of this security instrument has not been registered under the U.S. Securities Act of 1933, as amended (the "Securities Act"), or under the securities laws of certain states. This security may not be offered, sold or otherwise transferred, pledged or hypothecated except as permitted under the Act and applicable state securities laws pursuant to an effective registration statement or an exemption therefrom.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 mb-6 shadow-lg">
        <h2 className="text-sm font-semibold mb-3 uppercase text-gray-300">
          Notice to Residents of Canada
        </h2>

        <p className="text-gray-400 text-xs leading-relaxed uppercase">
          Unless permitted under securities legislation, the holder of this security must not trade the security before the date that the issuer becomes a reporting issuer in any province or territory.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 mb-6 shadow-lg">
        <h2 className="text-sm font-semibold mb-3 uppercase text-gray-300">
          Notice to Residents of China
        </h2>

        <p className="text-gray-400 text-xs leading-relaxed uppercase">
          The rights are not being offered or sold and may not be offered or sold, directly or indirectly, within the People’s Republic of China (for such purposes, not including the Hong Kong and Macau Special Administrative Regions or Taiwan), except as permitted by the securities and other laws and regulations of the People’s Republic of China.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#0B1224] border border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-sm font-semibold mb-3 uppercase text-gray-300">
          Notice to Residents of the United Kingdom
        </h2>

        <p className="text-gray-400 text-xs leading-relaxed uppercase">
          In the United Kingdom this document is being distributed only to, and is directed only at (and any investment activity to which it relates will be engaged only with): (i) investment professionals (within the meaning of article 19(5) of the Financial Services and Markets Act 2000 (Financial Promotion) Order 2005, as amended (the "FPO")); (ii) persons or entities of a kind described in article 49 of the FPO; (iii) certified sophisticated investors (within the meaning of article 50(1) of the FPO); and (iv) other persons to whom it may otherwise lawfully be communicated.
        </p>
      </div>

    </div>
  );
}