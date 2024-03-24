import{_ as s,c as e,o as i,V as a}from"./chunks/framework.c8XZiJH6.js";const g=JSON.parse('{"title":"SSR caveats","description":"","frontmatter":{"editLink":true},"headers":[],"relativePath":"guide/ssr/caveats.md","filePath":"guide/ssr/caveats.md","lastUpdated":1615748862000}'),t={name:"guide/ssr/caveats.md"},n=a(`<h1 id="ssr-caveats" tabindex="-1">SSR caveats <a class="header-anchor" href="#ssr-caveats" aria-label="Permalink to &quot;SSR caveats&quot;">​</a></h1><p>Unfortunately, when server-side rendering there is no information about the the screen size of the user who is requesting the page, so this library uses a configuration to decide the screen size on the server.<br> This behaviour can lead to some issues.</p><h2 id="hydration-errors" tabindex="-1">Hydration errors <a class="header-anchor" href="#hydration-errors" aria-label="Permalink to &quot;Hydration errors&quot;">​</a></h2><p>You can step into hydration errors if you conditionally render DOM elements or components based on screen or grid properties, because they can be different between the server and the client.</p><p>For example, if you create a the following template:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$grid.lg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>And open the app with a screen at 1400x900, you will receive hydration errors because the server rendered the template when <code>$grid.lg</code> was false, while in the browser the same property is true.</p><p>To avoid these problems, use <code>v-show</code> instead of <code>v-if</code> whenever possible.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$grid.lg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Since <code>v-show</code> keeps the element in the DOM, Vue will be able to match the DOM and vDOM correctly.</p>`,10),h=[n];function r(l,p,o,d,k,c){return i(),e("div",null,h)}const y=s(t,[["render",r]]);export{g as __pageData,y as default};