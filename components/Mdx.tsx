import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { PortalWithState } from "react-portal";
import { motion } from "framer-motion";

const CustomLink = (props) => {
	const href = props.href;

	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
	return (
		<PortalWithState
			closeOnOutsideClick
			closeOnEsc
		>
			{({ openPortal, closePortal, portal }) => (
				<React.Fragment>
					<button onClick={openPortal}>
						<Image
							alt={props.alt}
							className="rounded-xl"
							{...props}
						/>
					</button>
					{portal(
						<div
							className="flex flex-row flex-wrap absolute items-center justify-center top-0 left-0 w-full h-full bg-black/75 pointer-events-all px-[10%] py-[55px] z-[99]"
							onClick={closePortal}
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								transition={{
									type: "spring",
									damping: 30,
									duration: 0.04,
									stiffness: 350,
									delay: 0,
								}}
							>
								<Image
									alt={props.alt}
									className="block h-full max-h-[800px] w-auto max-w-[100%] object-contain cursor-pointer rounded-xl"
									{...props}
								/>
							</motion.div>
						</div>
					)}
				</React.Fragment>
			)}
		</PortalWithState>
	);
}

function Callout(props) {
	return (
		<div className="flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 my-8">
			<div className="flex items-center w-4 mr-4">{props.emoji}</div>
			<div className="w-full callout">{props.children}</div>
		</div>
	);
}

function ProsCard({ title, pros }) {
	return (
		<div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
			<span>{`You might use ${title} if...`}</span>
			<div className="mt-4">
				{pros.map((pro) => (
					<div
						key={pro}
						className="flex font-medium items-baseline mb-2"
					>
						<div className="h-4 w-4 mr-2">
							<svg
								className="h-4 w-4 text-emerald-500"
								viewBox="0 0 24 24"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
									<path d="M22 4L12 14.01l-3-3" />
								</g>
							</svg>
						</div>
						<span>{pro}</span>
					</div>
				))}
			</div>
		</div>
	);
}

function ConsCard({ title, cons }) {
	return (
		<div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
			<span>{`You might not use ${title} if...`}</span>
			<div className="mt-4">
				{cons.map((con) => (
					<div
						key={con}
						className="flex font-medium items-baseline mb-2"
					>
						<div className="h-4 w-4 mr-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-4 w-4 text-red-500"
							>
								<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
							</svg>
						</div>
						<span>{con}</span>
					</div>
				))}
			</div>
		</div>
	);
}

const components = {
	Image: RoundedImage,
	a: CustomLink,
	Callout,
	ProsCard,
	ConsCard,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<article className="prose prose-quoteless prose-neutral dark:prose-invert">
			<Component components={{ ...components }} />
		</article>
	);
}
