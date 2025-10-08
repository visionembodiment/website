'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services = [
    { id: 'mind-games', name: 'Mind Games Reading', price: '$15', duration: '60 min' },
    { id: 'one-to-one', name: 'One-to-One Coaching', price: '$200', duration: '60 min' },
    { id: 'archetypal-tarot', name: 'Archetypal Tarot', price: '$175', duration: '90 min' },
    { id: 'discovery', name: 'Free Discovery Call', price: 'Free', duration: '30 min' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">
            Book Your Session
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your service and preferred time to begin your transformation journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Select Service */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">
                Step 1: Select Your Service
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <span className={`font-bold ${service.price === 'Free' ? 'text-green-600' : 'text-purple-600'}`}>
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{service.duration}</p>
                    {service.id === 'mind-games' && (
                      <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Limited Time Offer!
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {selectedService && (
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>Selected:</strong> {services.find(s => s.id === selectedService)?.name}
                  </p>
                </div>
              )}
            </div>

            {/* Step 2: Select Date & Time */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">
                Step 2: Choose Date & Time
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time (EST)
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Choose a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>Selected:</strong> {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} at {selectedTime} EST
                  </p>
                </div>
              )}
            </div>

            {/* Step 3: Your Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">
                Step 3: Your Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Any specific topics or questions you'd like to address..."
                  />
                </div>
              </div>
            </div>

            {/* Payment Information Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-900 mb-2">Payment Information</h3>
              <p className="text-yellow-800">
                Payment will be processed after booking confirmation. You will receive an email with 
                payment instructions and a secure link to complete your purchase. All payments are 
                processed through secure, encrypted channels.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedService || !selectedDate || !selectedTime}
                className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Complete Booking
              </button>
              
              <p className="mt-4 text-sm text-gray-500">
                By booking, you agree to our{' '}
                <Link href="/terms" className="text-purple-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-purple-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>

          {/* Booking Policies */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Booking Policies</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation</h3>
                <p className="text-gray-600">
                  You will receive a confirmation email within 24 hours of booking. If your selected 
                  time is not available, we will contact you with alternative options.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Preparation</h3>
                <p className="text-gray-600">
                  Before your session, you&apos;ll receive preparation guidelines and a Zoom link.
                  Please ensure you have a quiet, private space for your session.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cancellation & Rescheduling</h3>
                <p className="text-gray-600">
                  You may reschedule or cancel your appointment up to 24 hours before your session 
                  without penalty. Late cancellations or no-shows will be charged the full session fee.{' '}
                  <Link href="/terms#cancellation" className="text-purple-600 hover:underline">
                    View full policy
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Requirements</h3>
                <p className="text-gray-600">
                  You&apos;ll need a stable internet connection, webcam, and microphone for online sessions.
                  Please test your equipment before the session to ensure a smooth experience.
                </p>
              </div>
            </div>
          </div>

          {/* Need Help? */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have questions about booking?{' '}
              <Link href="/contact" className="text-purple-600 hover:underline font-medium">
                Contact us
              </Link>{' '}
              or check our{' '}
              <Link href="/contact#faq" className="text-purple-600 hover:underline font-medium">
                FAQ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}