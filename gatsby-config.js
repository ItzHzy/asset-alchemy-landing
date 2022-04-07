module.exports = {
	siteMetadata: {
		title: `Asset Alchemy`,
		siteUrl: `https://assetalchemy.io`,
	},
	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-postcss",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		"gatsby-plugin-react-helmet",
	],
};
