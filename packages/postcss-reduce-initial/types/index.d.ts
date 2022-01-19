export default pluginCreator;
declare function pluginCreator(): {
    postcssPlugin: string;
    /** @param {import('postcss').Result & {opts: browserslist.Options & {ignore: string[]}}} result */
    prepare(result: import('postcss').Result & {
        opts: browserslist.Options & {
            ignore: string[];
        };
    }): {
        /** @param {import('postcss').Root} css */
        OnceExit(css: import('postcss').Root): void;
    };
};
declare namespace pluginCreator {
    const postcss: boolean;
}
