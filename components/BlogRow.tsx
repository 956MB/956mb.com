import clsx from "clsx";
import { Content } from "contentlayer/generated";
import { replaceSlash } from "lib/util";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogRow({ post }: { post: Content }) {
	let pathname = usePathname() || "/";
	let selected = pathname.includes(post.slug);

	return (
		<div
			className={clsx(
				"relative flex w-full items-center justify-end content-between m-0 pr-6 py-[5px]"
			)}
		>
			<a
				className={clsx(
					"flex flex-row gap-x-3 items-start justify-start w-full transition-all duration-50 text-neutral-400"
				)}
			>
				<Link
					key={post.slug}
					className="inline-block text-[15px] leading-4 uppercase mr-auto overflow-hidden overflow-ellipsis text-left"
					href={`/blog/${post.slug}`}
				>
					<span
						className={clsx("font-inter-semibold hover:underline hover:text-white",
							selected && "text-white underline font-inter-bold"
						)}
					>
						{post.title}
					</span>
				</Link>

				<span
					className={clsx(
						"text-[14px] leading-4 whitespace-nowrap text-right font-ibmplex-sans-medium text-neutral-600",
						selected && "text-white font-ibmplex-sans-semibold"
					)}
				>
					{post.publishedAt}
				</span>
			</a>

			{selected && (
				<div className="absolute inset-y-0 right-0 w-[3px] bg-white"></div>
			)}
		</div>
	);
}
