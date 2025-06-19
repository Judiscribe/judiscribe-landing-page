"use client";

import React, { useState } from "react";
import {
	CheckCircle,
	Gavel,
	Mic,
	Cloud,
	Search,
	FileText,
	Download,
	ArrowRight,
	Users,
	Shield,
	Clock,
	Menu,
	X,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-3 md:py-4">
					{/* Logo */}
					<div className="flex items-center space-x-2 md:space-x-3">
						<div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
							<Gavel className="w-4 h-4 md:w-6 md:h-6 text-white" />
						</div>
						<span className="text-xl md:text-2xl font-bold text-slate-800">
							Judiscribe
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex space-x-8">
          <Link
							href="#about"
							className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
						>
							About
						</Link>
						<Link
							href="#how-it-works"
							className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
						>
							How It Works
						</Link>
						<Link
							href="#benefits"
							className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
						>
							Benefits
						</Link>
						
					</nav>

					{/* Desktop CTA Buttons */}
					<div className="hidden md:flex items-center space-x-3 lg:space-x-4">
						<button className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm lg:text-base whitespace-nowrap cursor-pointer">
							<Link href="mailto:judiscribelegal@gmail.com?subject=Interest in Judiscribe - Court Transcription Solution&body=Hello Judiscribe Team,%0D%0A%0D%0AI'm interested in learning more about your AI-powered court transcription solution for Nigerian courts.%0D%0A%0D%0APlease get in touch with more information.%0D%0A%0D%0AThank you!">
								Contact Us
							</Link>
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6 text-slate-600" />
						) : (
							<Menu className="w-6 h-6 text-slate-600" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-slate-200 py-4 space-y-4">
						{/* Mobile Navigation Links */}
						<nav className="flex flex-col space-y-3">
            <Link
								href="#about"
								className="text-slate-600 hover:text-blue-600 font-medium transition-colors py-2 px-2 rounded-md hover:bg-slate-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href="#how-it-works"
								className="text-slate-600 hover:text-blue-600 font-medium transition-colors py-2 px-2 rounded-md hover:bg-slate-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								How It Works
							</Link>
							<Link
								href="#benefits"
								className="text-slate-600 hover:text-blue-600 font-medium transition-colors py-2 px-2 rounded-md hover:bg-slate-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Benefits
							</Link>
							
						</nav>

						{/* Mobile CTA Buttons */}
						<div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
							<button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg inline-block text-center cursor-pointer">
								<Link href="mailto:judiscribelegal@gmail.com?subject=Interest in Judiscribe - Court Transcription Solution&body=Hello Judiscribe Team,%0D%0A%0D%0AI'm interested in learning more about your AI-powered court transcription solution for Nigerian courts.%0D%0A%0D%0APlease get in touch with more information.%0D%0A%0D%0AThank you!">
									Contact Us
								</Link>
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
