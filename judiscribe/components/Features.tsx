import React from 'react';
import { CheckCircle, Gavel, Mic, Cloud, Search, FileText, Download } from 'lucide-react';

const FeaturesSection = () => {
	const features = [
	  {
		icon: Gavel,
		title: "Court Session Begins",
		description: "Judges or clerks activate Judiscribe on a secure device. Audio is captured in real time."
	  },
	  {
		icon: Mic,
		title: "Real-Time Transcription",
		description: "AI converts speech to text instantly. Transcripts are automatically tagged with speaker names, timestamps, and legal context."
	  },
	  {
		icon: Cloud,
		title: "Smart Cloud Sync",
		description: "Notes are securely synced to the cloud. Users can access transcripts from any authorized device."
	  },
	  {
		icon: Search,
		title: "Keyword Search & Filtering",
		description: "Easily search for names, topics, or case IDs. Jump to exact moments in the transcript."
	  },
	  {
		icon: FileText,
		title: "Instant Summarization",
		description: "AI generates legal-grade summaries. Judges or legal assistants review and finalize."
	  },
	  {
		icon: Download,
		title: "Export & Archive",
		description: "Download transcripts or push to court record systems. Fully auditable, secured, and time-stamped."
	  }
	];
  
	return (
	  <section id="how-it-works" className="py-20 bg-white">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="text-center mb-16">
			<div className="flex items-center justify-center mb-4">
			  <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
			  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How Judiscribe Works</h2>
			</div>
			<p className="text-xl text-slate-600 max-w-3xl mx-auto">
			  Streamlined workflow designed specifically for legal professionals and court proceedings
			</p>
		  </div>
		  
		  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{features.map((feature, index) => (
			  <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-100">
				<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
				  <feature.icon className="w-6 h-6 text-blue-600" />
				</div>
				<h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
				<p className="text-slate-600 leading-relaxed">{feature.description}</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  };

export default FeaturesSection;