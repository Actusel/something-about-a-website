<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { base } from '$app/paths';
</script>

<nav style="display:flex; justify-content: safe center; align-items: center; background-color: #333; color: #333; overflow-x: auto; overflow-y: hidden;">  
	<a href="{base}/">Home</a> 
	<a href="{base}/photoapp">Photo app</a> 
	<a href="{base}/register">Register</a> 
	<a href="{base}/login">Log in</a> 
	<a href="{base}/shoppinglist">Shopping list</a> 
	<a href="{base}/memory">memory</a> 
	<a href="{base}/chat">chat</a> 
	<a href="{base}/search">search</a> 
	<a href="{base}/gotta-go-fast">limited time Login</a>
	<a href="{base}/rythmn-game">Rythmn game</a>
	<a href="{base}/titel">Titel</a>
</nav>
<slot />

<style>
	a{margin-left: 30px;
		border-width: 2px;
		border-color: white;
		border-style: solid;
		padding: 3px;
		background-color: white;
		border-radius: 10px;
		font-weight: bold;
		color: #333;
		text-align: center;
		height: 33px;

	}
:global(body), :global(html){
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}    

</style>
