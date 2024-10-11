module.exports = function(api) {
	api.cache(true);
	return {
		presets: [["babel-preset-expo", {
            jsxImportSource: "nativewind"
        }], "nativewind/babel"],
		plugins: [
            'react-native-classname-to-style',
            ['react-native-platform-specific-extensions', { extensions: ['css', 'pcss'] }],
            // '@babel/plugin-transform-class-properties',
            '@babel/plugin-transform-export-namespace-from',
            '@babel/plugin-transform-runtime',
            // require.resolve('expo-router/babel'),
            'react-native-reanimated/plugin',
            ["module-resolver", {
                root: ["./"],

                alias: {
                    "@": "./"
                }
            }]
        ],
		sourceType: "unambiguous",
	};
};
