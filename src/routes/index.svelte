<script context="module">
    export const load = async ({fetch}) => {
        const response = await fetch("/api/post")
        const data = await response.json()
        console.log(data)

        return {
            props: {
                data
            }
        }
    }
</script>

<script>
    export let data
</script>

<h1>Anasayfa</h1>

{JSON.stringify(data)}