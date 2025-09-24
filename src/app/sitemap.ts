import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://warp01.vercel.app";

	return [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	];
}


