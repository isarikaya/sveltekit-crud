<script context="module">
    export const load = ({page}) => {
        const id = page.params.id
        const host = page.host
        const path = page.path
        
        return {
            props: {
                id,
                host,
                path
            }
        }
    }
</script>

<script>
    export let id,host,path;
</script>

<h1>Svelte & Sveltekit Nedir?</h1>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda saepe et veritatis, velit voluptatibus dolores
    dolor perspiciatis iusto nihil id obcaecati distinctio
    illo iste quasi architecto porro, fugit inventore eum!
</p>

{id + " " + host + " " + path}