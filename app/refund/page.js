'use client'

import { ShieldCheck, RefreshCcw, AlertCircle } from 'lucide-react'

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#FFF7ED] px-6 py-24 text-[#1E293B]">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Refund <span className="text-emerald-600">Policy</span>
        </h1>
        <p className="text-gray-600">
          Transparent, fair, and designed to protect both businesses and creators.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-10">

        {/* INTRO */}
        <div className="bg-white p-8 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4 text-emerald-600">
            <ShieldCheck />
            <h2 className="text-xl font-bold">Our Commitment</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At LocalCollab, we aim to provide a reliable and transparent platform for
            connecting local businesses with creators. Our refund policy is designed
            to ensure fairness while maintaining platform integrity.
          </p>
        </div>

        {/* ELIGIBILITY */}
        <div className="bg-white p-8 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4 text-emerald-600">
            <RefreshCcw />
            <h2 className="text-xl font-bold">Refund Eligibility</h2>
          </div>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Subscription cancellation within 7 days of purchase</li>
            <li>✔ Technical issues preventing platform access</li>
            <li>✔ Duplicate or accidental payments</li>
          </ul>
        </div>

        {/* NON REFUNDABLE */}
        <div className="bg-white p-8 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4 text-red-500">
            <AlertCircle />
            <h2 className="text-xl font-bold">Non-Refundable Cases</h2>
          </div>

          <ul className="space-y-3 text-gray-600">
            <li>✖ Completed collaborations between businesses and creators</li>
            <li>✖ Dissatisfaction due to campaign performance</li>
            <li>✖ Partial usage of subscription benefits</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4 text-emerald-600">
            Refund Process
          </h2>

          <p className="text-gray-600 mb-4">
            To request a refund, contact our support team with your transaction
            details. Our team will review your request within 3–5 business days.
          </p>

          <p className="text-gray-600">
            Approved refunds will be processed within 7–10 business days via the
            original payment method.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-emerald-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Need help with a refund?
          </h2>
          <p className="mb-5">
            Our support team is here to assist you anytime.
          </p>

          <a
            href="mailto:localcollab@gmail.com"
            className="bg-white text-emerald-600 px-6 py-3 rounded-full font-bold"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  )
}