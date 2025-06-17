import React from 'react';

const CTASection = () => {
	return (
	  <section className="py-20 bg-blue-600">
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
			Ready to Transform Your Court Proceedings?
		  </h2>
		  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
			Start your free trial today and experience the future of legal transcription. No setup fees, no long-term contracts.
		  </p>
		  <div className="flex flex-col sm:flex-row gap-4 justify-center">
			<button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
			  Start Free 30-Day Trial
			</button>
			<button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
			  Schedule Demo
			</button>
		  </div>
		  <p className="text-blue-200 text-sm mt-6">
			Free trial includes full access to all features • No credit card required
		  </p>
		</div>
	  </section>
	);
  };

export default CTASection;