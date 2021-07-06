<script context="module">
    export const load = async({page,fetch}) => {
        const id = page.params.authorId
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()
        return {
            props: {
                user
            }
        }
    }
</script>

<script>
    export let user
</script>

<h1>{user.name}</h1>
<p>{user.company.name}</p>
<p>{user.phone}</p>
<p>{user.email}</p>