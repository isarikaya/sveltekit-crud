<script>
    let name = 'İbrahim',
        email = 'isarikayaa@outlook.com',
        message = '',
        error = '';
    const submitForm = async () => {
        try {
            const submit = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email
                })
            })
            const data = await submit.json()
            message = data
        } catch (err) {
            error = err
        }
    }
</script>

<h1>İletişim</h1>

{#if !message && !error}
<form on:submit|preventDefault={submitForm}>
    <label for="">
        İsim:
        <input type="text" name="name" bind:value={name}>
    </label>
    <label for="">
        Email:
        <input type="email" name="email" bind:value={email}>
    </label>
    <input type="submit" value="Submit">
</form>
{:else if message}
<p>Merhaba {message.name} Bey bilgileriniz gönderildi.</p>
{:else if error}
<p>Form gönderilirken bir hata oluştu lütfen {email} ile iletişime geçin.</p>
{/if}
<style>
    label {
        display: block;
        margin-bottom: 20px;
    }
</style>