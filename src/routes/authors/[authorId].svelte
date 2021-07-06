<script context="module">
    export const load = async({page,fetch}) => {
    const id = page.params.authorId
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // const user = await res.json()
    // const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
    // const allPosts = await resPosts.json()

    const [resUser, resPosts] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
        fetch("https://jsonplaceholder.typicode.com/posts")
    ])
    
    const user = await resUser.json()
    const allPosts = await resPosts.json()

    const posts = allPosts.filter((post) => {
        return post.userId === user.id
    })
        return {
            props: {
                user,
                posts
            }
        }
    }
</script>

<script>
import { each } from "svelte/internal";


    export let user,posts
</script>

<h1>{user.name}</h1>
<p>{user.company.name}</p>
<p>{user.phone}</p>
<p>{user.email}</p>

<h2>Yazarın tüm gönderileri</h2>
<ul>
    {#each posts as item}
        <li>
            <a sveltekit:prefetch href={`/blog/${item.id}`}>{item.title}</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
    }
</style>