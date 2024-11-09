import React from 'react';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Center</h1>
        <p className="text-gray-600">Find answers to common questions or reach out for support</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search for answers..."
          className="w-full max-w-lg p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Common Questions Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">How do I reset my password?</h3>
            <p className="text-gray-600 mt-2">To reset your password, go to the login page and click "Forgot Password". Follow the instructions to receive a reset link.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">How do I update my profile?</h3>
            <p className="text-gray-600 mt-2">Navigate to your account settings, where you’ll be able to update your personal information and profile picture.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">How can I contact support?</h3>
            <p className="text-gray-600 mt-2">You can contact our support team via email or live chat available on the Contact Us page.</p>
          </div>
        </div>
      </section>

      {/* Help Topics Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Account & Profile</h3>
            <p className="text-gray-600">Manage your account settings, update information, and configure preferences.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Orders & Payments</h3>
            <p className="text-gray-600">Get help with orders, payments, and tracking your purchases.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Shipping & Delivery</h3>
            <p className="text-gray-600">Learn about shipping options, delivery times, and costs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Technical Issues</h3>
            <p className="text-gray-600">Get help with technical issues, troubleshooting, and device compatibility.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Privacy & Security</h3>
            <p className="text-gray-600">Learn about data protection, privacy policies, and security measures.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Community Guidelines</h3>
            <p className="text-gray-600">Understand our community guidelines and code of conduct.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Help Center. All rights reserved.</p>
      </footer>
    </div>
  );
}
