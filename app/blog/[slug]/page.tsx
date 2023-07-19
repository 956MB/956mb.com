import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { allBlogs } from "contentlayer/generated";
const BlogC = dynamic(() => import("components/BlogContainer"), { ssr: false });

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	const post = allBlogs.find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
		slug,
	} = post;
	const ogImage = image
		? `https://956mb.com${image}`
		: `https://956mb.com/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `https://956mb.com/blog/${slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function BlogPage({ params }) {
	return (
		<section>
			<div className="flex w-full flex-col flex-1 items-start /*border-t border-neutral-800*/ mt-[55px]">
				<BlogC />
			</div>
		</section>
	);
}