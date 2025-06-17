import React from 'react';
import { Gavel } from 'lucide-react';

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
				Professional court transcription powered by AI. Secure, accurate, and trusted.
			  </p>
			</div>
			
			<div>
			  <h4 className="font-semibold text-white mb-4">Product</h4>
			  <ul className="space-y-2">
				<li><a href="#" className="hover:text-white transition-colors">Features</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Security</a></li>
				<li><a href="#" className="hover:text-white transition-colors">API</a></li>
			  </ul>
			</div>
			
			<div>
			  <h4 className="font-semibold text-white mb-4">Support</h4>
			  <ul className="space-y-2">
				<li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Status</a></li>
			  </ul>
			</div>
			
			<div>
			  <h4 className="font-semibold text-white mb-4">Legal</h4>
			  <ul className="space-y-2">
				<li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
				<li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
				<li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
			  </ul>
			</div>
		  </div>
		  
		  <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
			<p className="text-slate-400">© 2025 Judiscribe. All rights reserved.</p>
			<div className="flex space-x-6 mt-4 md:mt-0">
			  <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
			  <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
			  <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookies</a>
			</div>
		  </div>
		</div>
	  </footer>
	);
  };

  export default Footer;