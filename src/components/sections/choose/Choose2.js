import Link from "next/link";

const Choose2 = () => {
	return (
		<section id="choose" className="tj-choose-section section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Why Choose Us
							</span>
							<h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">
								Empowering Growth with Expert <span>Consultancy.</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					<div className="col-md-6 col-lg-4">
						<div className="choose-box customers-box h9-choose-box right-swipe glass-card">
							<div className="card-top">
								<h4 className="title">
									Accelerated Growth Engine.
								</h4>
								<p className="desc">
									Transcend standard expectations. Our 1000+ success stories aren't just numbers; they are lives transformed through elite placement.
								</p>
							</div>
							<div className="customers-inner">
								<div className="growth-metric">
									<div className="metric-item">
										<span className="number">98%</span>
										<span className="label">Success Velocity</span>
									</div>
									<div className="metric-bar">
										<div className="bar-fill" style={{ width: "98%" }}></div>
									</div>
								</div>
								<div className="rating-area">
									<div className="star-ratings">
										<div className="fill-ratings">
											<span>★★★★★</span>
										</div>
										<div className="empty-ratings">
											<span>★★★★★</span>
										</div>
									</div>
								</div>
								<h5 className="customers-text">Voted #1 for Career ROI.</h5>
							</div>
							<div className="card-glow"></div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="choose-box h9-choose-box right-swipe glass-card">
							<div className="choose-content">
								<div className="choose-icon">
									<i className="tji-award"></i>
								</div>
								<h4 className="title">Strategic Pulse</h4>
								<p className="desc">
									Navigate the complexity of modern business with our seasoned artisans. We don't just consult; we architect your future with precision.
								</p>
							</div>
							<div className="card-glow"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div
							className="choose-box h9-choose-box h9-choose-bg right-swipe glass-card bg-dynamic"
							style={{
								backgroundImage: "url('/images/about/about-4.webp')",
							}}
						>
							<div className="choose-content">
								<h4 className="title">Bespoke Concierge</h4>
								<p className="desc">
									Your vision deserves a dedicated blueprint. Experience precision-engineered support that aligns every move with your ultimate ambition.
								</p>
								<Link className="text-btn" href="/contact">
									<span className="btn-text">
										<span>Start Your Legacy</span>
									</span>
									<span className="btn-icon">
										<i className="tji-arrow-right-long"></i>
									</span>
								</Link>
							</div>
							<div className="card-overlay"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Choose2;
