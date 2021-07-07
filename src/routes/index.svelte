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
    import { paginate, LightPaginationNav } from "svelte-paginate"
    export let posts
    let items = posts // or posts.reverse()
    let currentPage = 1
    let pageSize = 4
    $: paginatedItems = paginate({ items, pageSize, currentPage })
</script>



<h1>Gönderiler</h1>

<div class="posts">
    {#each paginatedItems as item}
        <div class="post">
            <h3><a href={`/blog/${item.id}`}>{item.title}</a></h3>
            <p>{item.body.substring(0, 120)+"..."}</p>
            <p class="link"><a sveltekit:prefetch href={`/blog/${item.id}`}>Devamını Oku...</a></p>
        </div>
    {/each}
</div>

<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>

<style>
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-bottom: 30px;
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


<!-- <script>
	import { onMount } from 'svelte';
	import InfiniteLoading from 'svelte-infinite-loading';
	
	const api = 'https://jsonplaceholder.typicode.com/posts?_page=';
	
	let page = 1;
	let list = [];
	
	function infiniteHandler({ detail: { loaded, complete } }) {
		fetch(`${api+page}`)
			.then(response => response.json())
			.then(data => {
        if (data.length) {
          page += 1; 
          list = [...list, ...data];
          loaded();
        } else {
          complete();
        }
      });
	}
</script>

<div class="posts">

	{#each list as item}
        <div class="post">
            <h3><a href={`/blog/${item.id}`}>{item.title}</a></h3>
            <p>{item.body.substring(0, 120)+"..."}</p>
            <p class="link"><a sveltekit:prefetch href={`/blog/${item.id}`}>Devamını Oku...</a></p>
        </div>
    {/each}
	
	<InfiniteLoading on:infinite={infiniteHandler} />
</div>


<style>
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        padding-top: 20px;
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
</style> -->