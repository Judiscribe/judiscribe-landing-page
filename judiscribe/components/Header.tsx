import React from 'react';
import { CheckCircle, Gavel, Mic, Cloud, Search, FileText, Download, ArrowRight, Users, Shield, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Gavel className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">Judiscribe</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">How It Works</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Sign In</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;