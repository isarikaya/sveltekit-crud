<script>
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
</style>