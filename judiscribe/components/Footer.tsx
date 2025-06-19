import React from 'react';
import { Gavel, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
	return (
	  <footer className="bg-slate-800 text-slate-300 py-12">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="grid md:grid-cols-4 gap-8">
			<div>
			  <div className="flex items-center space-x-3 mb-4">
				<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
				  <Gavel className="w-5 h-5 text-white" />
				</div>
				<span className="text-xl font-bold text-white">Judiscribe</span>
			  </div>
			  <p className="text-slate-400">
				AI-powered court transcription built specifically for Nigerian courts. Transforming justice through technology.
			  </p>
			</div>
			
			<div>
			  <h4 className="font-semibold text-white mb-4">Solution</h4>
			  <ul className="space-y-2">
				<li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
				<li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
				<li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
			  </ul>
			</div>
			
			<div>
			  <h4 className="font-semibold text-white mb-4">Technology</h4>
			  <ul className="space-y-2">
				<li><span className="text-slate-400">AI Transcription</span></li>
				<li><span className="text-slate-400">Blockchain Security</span></li>
				<li><span className="text-slate-400">Multi-Language Support</span></li>
				<li><span className="text-slate-400">Cloud Storage</span></li>
			  </ul>
			</div>
			
			<div>
			  <h4 className="font-semibold text-white mb-4">Contact</h4>
			  <ul className="space-y-3">
				<li className="flex items-center">
				  <Mail className="w-4 h-4 mr-2" />
				  <a href="mailto:judiscribelegal@gmail.com" className="hover:text-white transition-colors">
				  judiscribelegal@gmail.com
				  </a>
				</li>
				<li className="flex items-center">
				  <MapPin className="w-4 h-4 mr-2" />
				  <span className="text-slate-400">Lagos, Nigeria</span>
				</li>
				<li className="flex items-center">
				  <Globe className="w-4 h-4 mr-2" />
				  <span className="text-slate-400">Serving Nigerian Courts</span>
				</li>
			  </ul>
			</div>
		  </div>
		  
		  <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
			<p className="text-slate-400">© 2025 Judiscribe. Transforming Nigerian Justice.</p>
			<div className="flex space-x-6 mt-4 md:mt-0">
			  <a href="mailto:judiscribelegal@gmail.com" className="text-slate-400 hover:text-white transition-colors">Contact</a>
			  <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
			</div>
		  </div>
		</div>
	  </footer>
	);
  };

export default Footer;