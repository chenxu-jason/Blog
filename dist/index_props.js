import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "web3博客",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>web3博客</h1>\n<p>智能合约</p>\n<h3 id="%E4%BB%A3%E7%A0%81%E5%9D%97">代码块：<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E5%9D%97">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 写法一：\n<span class="token keyword">const</span> promise <span class="token operator">=</span> new <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token operator">/</span><span class="token operator">/</span> 调用resolve，那么<span class="token keyword">then</span>传入的回调会被执行\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"then执行"</span><span class="token punctuation">)</span>\n  <span class="token operator">/</span><span class="token operator">/</span> 调用reject， 那么catch传入的回调会被执行\n  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"catch执行"</span><span class="token punctuation">)</span>\n}<span class="token punctuation">)</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n}<span class="token punctuation">,</span>err <span class="token operator">=</span><span class="token operator">></span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span>\n\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "web3\u535A\u5BA2"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>智能合约</p>\n<h3 id="%E4%BB%A3%E7%A0%81%E5%9D%97">代码块：<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E5%9D%97">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 写法一：\n<span class="token keyword">const</span> promise <span class="token operator">=</span> new <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token operator">/</span><span class="token operator">/</span> 调用resolve，那么<span class="token keyword">then</span>传入的回调会被执行\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"then执行"</span><span class="token punctuation">)</span>\n  <span class="token operator">/</span><span class="token operator">/</span> 调用reject， 那么catch传入的回调会被执行\n  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"catch执行"</span><span class="token punctuation">)</span>\n}<span class="token punctuation">)</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n}<span class="token punctuation">,</span>err <span class="token operator">=</span><span class="token operator">></span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span>\n\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A3%E7%A0%81%E5%9D%97" }, "\u4EE3\u7801\u5757\uFF1A")))),
    'author': undefined,
    'contributors': [],
    'date': "2024-06-16T04:03:26.647Z",
    'updated': null,
    'excerpt': "智能合约 代码块： // 写法一： const promise = new Promise((resolve, reject) => { // 调用resolve，那么then传入的回调会被执行 resolve(\"then执行\") // 调用reject， 那么catch传入的回调会被执行 reject(\"catch执行\") })...",
    'cover': undefined
};
