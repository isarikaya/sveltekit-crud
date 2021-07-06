<script context="module">
    export const load = async({fetch}) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json()
        return {
            props: {
                posts
            }
        }
    }
</script>

<script>
    export let posts
</script>

<h1>Gönderiler</h1>

<div class="posts">
    {#each posts as item,i}
        <div class="post">
            <h3>{i+1}. <a href={`/blog/${item.id}`}>{item.title}</a></h3>
            <p>{item.body.substring(0, 120)+"..."}</p>
            <p class="link"><a sveltekit:prefetch href={`/blog/${item.id}`}>Devamını Oku...</a></p>
        </div>
    {/each}
</div>

<style>
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .post {
        padding: 10px;
        border: 1px solid rgb(30, 170, 212);
        box-shadow: 0 0 10px rgb(153, 153, 184);
    }
    h3 {
        margin: 0;
    }
    a {
        color: rgb(30, 170, 212);
    }
    .link {
        text-align: right;
    }
</style>
