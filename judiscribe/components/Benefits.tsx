import React from 'react';

const BenefitsSection = () => {
	const benefits = [
	  {
		title: "99.5% Accuracy",
		description: "Legal-grade transcription with specialized vocabulary recognition",
		metric: "99.5%"
	  },
	  {
		title: "Real-Time Processing",
		description: "Instant transcription with zero delay for immediate review",
		metric: "<1s"
	  },
	  {
		title: "Secure & Compliant",
		description: "HIPAA compliant with end-to-end encryption and audit trails",
		metric: "100%"
	  },
	  {
		title: "Cost Savings",
		description: "Reduce transcription costs by up to 80% compared to traditional methods",
		metric: "80%"
	  }
	];
  
	return (
	  <section className="py-20 bg-slate-900">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="text-center mb-16">
			<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
			  Trusted by Legal Professionals
			</h2>
			<p className="text-xl text-slate-300 max-w-3xl mx-auto">
			  Join hundreds of courts and legal firms who trust Judiscribe for their transcription needs
			</p>
		  </div>
		  
		  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{benefits.map((benefit, index) => (
			  <div key={index} className="text-center">
				<div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-4">{benefit.metric}</div>
				<h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
				<p className="text-slate-300">{benefit.description}</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  };

export default BenefitsSection;