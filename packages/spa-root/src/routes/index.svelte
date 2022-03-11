<script context="module">
	export const prerender = true;
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
    <div class="full-width">
        <div id="single-spa-application:footer" class="full-width relative"></div>
        <div class="product-area">
          <div id="single-spa-application:product-image"></div>
          <div>
            <div id="single-spa-application:root"></div>
            <div>Hello</div>
          </div>
        </div>
        <div id="single-spa-application:header"></div>
      </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	h1 {
		width: 100%;
	}
	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>