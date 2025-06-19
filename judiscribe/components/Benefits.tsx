import React from 'react';

const BenefitsSection = () => {
	const benefits = [
	  {
		title: "Transcription Accuracy",
		description: "Superior AI accuracy supporting Multiple Local languages",
		metric: "99%"
	  },
	  {
		title: "Case Resolution Time",
		description: "Dramatically reduce average case resolution from years to months",
		metric: "6x Faster"
	  },
	  {
		title: "Tamper-Proof Security",
		description: "Blockchain technology ensures immutable and secure court records",
		metric: "100%"
	  },
	  {
		title: "Cost Reduction",
		description: "More affordable through local talent and efficient technology",
		metric: "30% Less"
	  }
	];
  
	return (
	  <section id="benefits" className="py-20 bg-slate-900">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="text-center mb-16">
			<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
			  Transforming Nigerian Justice System
			</h2>
			<p className="text-xl text-slate-300 max-w-3xl mx-auto">
			  Built specifically for Nigerian courts with advanced AI and blockchain technology
			</p>
		  </div>
		  
		  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{benefits.map((benefit, index) => (
			  <div key={index} className="text-center">
				<div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-4">{benefit.metric}</div>
				<h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
				<p className="text-slate-300">{benefit.description}</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  };

export default BenefitsSection;