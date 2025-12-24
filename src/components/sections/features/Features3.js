const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "IT & Software Development",
			icon: "tji-window",
			desc: "Supplying top-tier technical talent for software houses, startups, and enterprise IT departments worldwide.",
			bg: "/images/sectors/it.png",
		},
		{
			id: 2,
			title: "Non-IT & Corporate",
			icon: "tji-award",
			desc: "Connecting businesses with skilled professionals in administration, management, HR, and operations.",
			bg: "/images/hero/slider-1.webp",
		},
		{
			id: 3,
			title: "BPO & Customer Support",
			icon: "tji-support",
			desc: "Building efficient teams for voice, non-voice, and technical support centers with high-quality candidates.",
			bg: "/images/about/about-3.webp",
		},
		{
			id: 4,
			title: "Banking & Govt Contracts",
			icon: "tji-budget",
			desc: "Specialized recruitment for finance and large-scale government staffing projects.",
			bg: "/images/hero/slider-3.webp",
		},
	];

	return (
		<section id="sectors" className="sectors-showcase section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<div className="sec-heading wow fadeInUp" data-wow-delay=".2s">
							<span className="sub-title">Placement Expertise</span>
							<h2 className="sec-title">
								Specialized Recruitment <span>Sectors.</span>
							</h2>
						</div>
					</div>
				</div>

				<div className="showcase-container">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className={`showcase-panel wow fadeInUp ${index === 0 ? 'active' : ''}`}
							data-wow-delay={`${0.3 + index * 0.1}s`}
						>
							<div
								className="panel-bg"
								style={{ backgroundImage: `url(${feature.bg})` }}
							></div>
							<div className="panel-overlay"></div>

							{/* Vertical Header (Visible when collapsed) */}
							<div className="panel-header">
								<div className="panel-icon">
									<i className={feature.icon}></i>
								</div>
								<h4 className="panel-title">{feature.title}</h4>
							</div>

							{/* Expanded Content */}
							<div className="panel-content">
								<div className="content-icon">
									<i className={feature.icon}></i>
								</div>
								<h3 className="content-title">{feature.title}</h3>
								<p className="content-desc">{feature.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features3;
