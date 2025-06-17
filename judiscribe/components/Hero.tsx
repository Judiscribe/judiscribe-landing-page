import { ArrowRight, Clock, Shield, Users } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
	return (
	  <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
			<div>
			  <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
				Professional Court
				<span className="text-blue-600"> Transcription</span>
				<br />Made Simple
			  </h1>
			  <p className="mt-6 text-xl text-slate-600 leading-relaxed">
				AI-powered real-time transcription for legal proceedings. Secure, accurate, and trusted by courts nationwide.
			  </p>
			  <div className="mt-8 flex flex-col sm:flex-row gap-4">
				<button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center">
				  Start Free Trial
				  <ArrowRight className="ml-2 w-5 h-5" />
				</button>
				<button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-lg">
				  Watch Demo
				</button>
			  </div>
			  <div className="mt-8 flex items-center space-x-6 text-sm text-slate-500">
				<div className="flex items-center">
				  <Shield className="w-4 h-4 mr-2" />
				  HIPAA Compliant
				</div>
				<div className="flex items-center">
				  <Users className="w-4 h-4 mr-2" />
				  Trusted by 500+ Courts
				</div>
				<div className="flex items-center">
				  <Clock className="w-4 h-4 mr-2" />
				  99.9% Uptime
				</div>
			  </div>
			</div>
			<div className="mt-12 lg:mt-0">
			  <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
				<div className="flex items-center justify-between mb-6">
				  <div className="flex items-center space-x-3">
					<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div className="w-3 h-3 bg-green-500 rounded-full"></div>
				  </div>
				  <div className="flex items-center text-sm text-slate-500">
					<div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
					Live Recording
				  </div>
				</div>
				<div className="space-y-3">
				  <div className="flex items-start space-x-3">
					<span className="text-xs text-slate-400 mt-1">10:32</span>
					<div>
					  <span className="font-medium text-slate-700">Judge:</span>
					  <span className="text-slate-600 ml-2">The court will now hear opening statements...</span>
					</div>
				  </div>
				  <div className="flex items-start space-x-3">
					<span className="text-xs text-slate-400 mt-1">10:35</span>
					<div>
					  <span className="font-medium text-slate-700">Attorney:</span>
					  <span className="text-slate-600 ml-2">Your Honor, we respectfully submit...</span>
					</div>
				  </div>
				  <div className="flex items-start space-x-3">
					<span className="text-xs text-slate-400 mt-1">10:38</span>
					<div>
					  <span className="font-medium text-blue-600">Witness:</span>
					  <span className="text-slate-600 ml-2">I was present at the scene when...</span>
					  <span className="inline-block w-2 h-4 bg-blue-600 ml-1 animate-pulse"></span>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	);
  };

export default HeroSection;
  