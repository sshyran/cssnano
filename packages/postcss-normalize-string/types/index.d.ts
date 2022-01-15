export default pluginCreator;
export type StringAstNode = {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
};
export type StringAst = {
    nodes: StringAstNode[];
    types: {
        escapedSingleQuote: number;
        escapedDoubleQuote: number;
        singleQuote: number;
        doubleQuote: number;
    };
    quotes: boolean;
};
export type PostcssNormalizeStringOptions = {
    preferredQuote?: 'double' | 'single';
};
/** @typedef {{preferredQuote?: 'double' | 'single'}} PostcssNormalizeStringOptions */
/**
 * @param {PostcssNormalizeStringOptions} opts
 */
declare function pluginCreator(opts: PostcssNormalizeStringOptions): {
    postcssPlugin: string;
    /** @param {import('postcss').Root} css */
    OnceExit(css: import('postcss').Root): void;
};
declare namespace pluginCreator {
    const postcss: boolean;
}
