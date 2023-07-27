import type { Metadata } from "next";

import { groups } from "lib/design";
import React from "react";
import DesignRow from "components/DesignRow";

export const metadata: Metadata = {
	title: "Design",
	description: "Various Figma, Photoshop and other design concepts.",
};

export default function DesignPage() {
	return (
		<section>
			<div className="flex w-full flex-col flex-wrap items-center justify-start mt-[55px] sm:pt-[20px]">
				{React.Children.toArray(
					groups.map((group, i) => (
                        <DesignRow entry={group} />
					))
				)}
			</div>
		</section>
	);
}