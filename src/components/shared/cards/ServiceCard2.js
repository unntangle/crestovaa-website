import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, img, svg, svgIcon, iconName } = service || {};

	return (
		<div className="service-item-wrapper tj-fadein-right-on-scroll">
			<div className="service-item style-2 cyber-blade-card">
				<div className="blade-edge"></div>
				<div className="service-icon">
					{svg ? (
						<span
							className="svg-icon-img"
							style={{
								maskImage: `url(${svgIcon || svg})`,
								WebkitMaskImage: `url(${svgIcon || svg})`,
								WebkitMaskRepeat: "no-repeat",
								maskRepeat: "no-repeat",
								WebkitMaskPosition: "center",
								maskPosition: "center",
								WebkitMaskSize: "contain",
								maskSize: "contain",
								backgroundColor: "currentColor",
								width: "40px",
								height: "40px",
								display: "inline-block",
							}}
						/>
					) : (
						<i className={iconName ? iconName : "tji-service-1"}></i>
					)}
				</div>
				<div className="service-content">
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
					<p className="desc">
						{desc || "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized solutions."}
					</p>
					<ul className="list-items">
						<li><i className="tji-list"></i>Expansion Strategies</li>
						<li><i className="tji-list"></i>Operational Efficiency</li>
						<li><i className="tji-list"></i>Competitive Edge</li>
					</ul>
				</div>
				<div className="blade-glitch"></div>
			</div>
		</div>
	);
};

export default ServiceCard2;
