import type { Metadata } from "next";

import { neographyGroups } from "lib/scripts";
import React from "react";
import DesignRow from "components/DesignRow";
import parse from "html-react-parser";
import { neography_d } from "lib/info";

export const metadata: Metadata = {
	title: "Scripts",
	description:
		"All of the language scripts (and eventually conlangs) I've created for the r/neography subreddit.",
};

export default function DesignPage() {
	return (
		<section>
			<div className="flex w-full flex-col flex-wrap items-center justify-start gap-3 sm:pt-5 pb-6 px-6 sm:px-8">
				<div className="inline-flex flex-col gap-4 w-full max-w-screen-2xl">
					<div className="flex flex-col items-center justify-center gap-3 pt-[13px] sm:pt-4 text-center">
						<span className="text-white font-neue-haas-grotesk-medium text-[21px] leading-[18px]">
							{"Scripts"}
						</span>

						<span className="font-ibmplex-sans-medium text-sm leading-5 text-neutral-500 max-w-3xl page-summary">
							{parse(neography_d)}
						</span>
					</div>

					<div className="flex flex-row items-center justify-center w-full mb-0">
						<hr className="h-px w-full bg-neutral-800 my-auto" />
					</div>
				</div>

				{React.Children.toArray(
					neographyGroups.map((group, i) => (
						<DesignRow entry={group} noHeader />
					))
				)}
			</div>
		</section>
	);
}
