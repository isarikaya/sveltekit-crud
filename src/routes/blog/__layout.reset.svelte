<script>
    import Header from "$partials/Header.svelte";
</script>

<div class="container">
    <Header></Header>
    <slot></slot>
</div>

<style>
    .container {
        height: 100vh;
        background: lightseagreen;
    }
</style>