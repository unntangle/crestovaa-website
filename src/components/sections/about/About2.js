import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const About2 = () => {
	return (
		<section className="tj-about-section nexus-section section-gap">
			<div className="container">
				<div className="nexus-wrapper">
					{/* Central Hub Panel */}
					<div
						className="nexus-panel central-hub glass-glow wow zoomIn"
						data-wow-delay=".2s"
					>
						<div className="about-content">
							<div className="sec-heading style-2">
								<span className="sub-title text-primary">Excellence in Consultancy</span>
								<h2 className="sec-title title-highlight">
									Your Strategic Partner for Career Growth and Business Innovation.
								</h2>
							</div>
							<div className="nexus-actions wow fadeInUp" data-wow-delay=".4s">
								<ButtonPrimary
									text={"Learn More"}
									url={"/about"}
									isTextBtn={true}
								/>
							</div>
						</div>

						{/* Overlapping Video Node */}
						<div className="nexus-video-node wow fadeInRight" data-wow-delay=".6s">
							<video
								className="nexus-video-element"
								autoPlay
								loop
								muted
								playsInline
								src="/video/job-con01.mp4"
							/>
						</div>
					</div>

					{/* Floating Stat Panels */}
					<div className="nexus-floating-elements">
						{/* Stat Panel 01 */}
						<div
							className="nexus-panel stat-panel p1 glass-nexus float-anim-1 wow fadeInUp"
							data-wow-delay=".1s"
						>
							<div className="panel-accent"></div>
							<div className="panel-header">
								<span className="steps">01</span>
								<span className="count-icon">
									<i className="tji-complete"></i>
								</span>
							</div>
							<div className="count-inner">
								<span className="count-text">Success Rate</span>
								<FunfactSingle currentValue={93} symbol="%" />
								<p className="desc">Empowering professionals with top-tier placements across industries.</p>
							</div>
						</div>

						{/* Happy Candidates Panel (Organic Shape) */}
						<div
							className="nexus-panel glass-effect candidate-node rightSwipeWrap wow fadeInRight"
							data-wow-delay=".5s"
						>
							<div className="card-decoration"></div>
							<div className="customers-content">
								<div className="customers">
									<ul>
										<li><img src="/images/testimonial/client-1.webp" alt="Client" /></li>
										<li><img src="/images/testimonial/client-2.webp" alt="Client" /></li>
										<li><img src="/images/testimonial/client-3.webp" alt="Client" /></li>
										<li className="count"><span><i className="tji-plus"></i></span></li>
									</ul>
								</div>
								<h6 className="customers-text">1000+ happy candidates.</h6>
							</div>
							<div className="star-icon zoomInOut">
								<img src="/images/shape/star.svg" alt="star" />
							</div>
						</div>

						{/* Stat Panel 02 */}
						<div
							className="nexus-panel stat-panel p2 glass-nexus float-anim-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="panel-accent style-2"></div>
							<div className="panel-header">
								<span className="steps">02</span>
								<span className="count-icon">
									<i className="tji-worldwide"></i>
								</span>
							</div>
							<div className="count-inner">
								<span className="count-text">Global Reach</span>
								<FunfactSingle currentValue={50} symbol="+" />
								<p className="desc">Expanding horizons through our extensive international network.</p>
							</div>
						</div>

						{/* Stat Panel 03 */}
						<div
							className="nexus-panel stat-panel p3 glass-nexus float-anim-3 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="panel-accent style-3"></div>
							<div className="panel-header">
								<span className="steps">03</span>
								<span className="count-icon">
									<i className="tji-growth"></i>
								</span>
							</div>
							<div className="count-inner">
								<span className="count-text">Multiplier</span>
								<FunfactSingle currentValue={9.5} symbol="X" />
								<p className="desc">Driving exceptional results and strategic career acceleration.</p>
							</div>
						</div>
					</div>

					{/* Background Decoration Lines */}
					<div className="nexus-tech-lines">
						<div className="line l1"></div>
						<div className="line l2"></div>
						<div className="line l3"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2;
