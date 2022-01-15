export default pluginCreator;
declare function pluginCreator(): {
    postcssPlugin: string;
    /**
     * @param {import('postcss').Root} css
     * @param {{result: import('postcss').Result}} arg1
     */
    OnceExit(css: import('postcss').Root, { result }: {
        result: import('postcss').Result;
    }): void;
};
declare namespace pluginCreator {
    const postcss: boolean;
}
