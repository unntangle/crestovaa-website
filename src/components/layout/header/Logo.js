"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo" style={{ maxWidth: "none", width: "auto" }}>
			<Link className="logo" href="/" style={{ maxWidth: "220px" }}>
				<Image
					src="/images/crestovaa-logo.webp"
					alt="Crestovaa"
					width={900}
					height={252}
					style={{ height: "auto", width: "100%", maxWidth: "none" }}
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;
