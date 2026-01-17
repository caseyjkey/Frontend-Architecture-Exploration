<script context="module">
    import { client } from '$lib/graphql-client'
    import { authorQuery, projectsQuery } from '$lib/graphql-queries'
    import  ProjectCard from '$lib/components/project-card.svelte' 

    export const load = async () => {
        
        const [ authorReq, projectsReq ] = await Promise.all([
            client.request(authorQuery),
            client.request(projectsQuery),
        ])

        const { authors } = authorReq
        const { projects } = projectsReq

        return { props: { projects, authors } }
    }
</script>

<script>
    export let authors
    export let projects
</script>

<svelte:head>
    <title>My Portfolio</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">
    Software Engineer
</h1>

{#each authors as { name, intro, picture: { url }}}
    <div class="flex mb-40 items-end">
        <div class="mr-6">
            <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
            <p class="text-xl mb-4">{intro}</p>
        </div>
        
        <img class="mask mask-squircle h-48" src={url} alt={name} />
    </div>
{/each}

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
    {#each projects as {image, name, slug, description}}
        <ProjectCard {name} {description} url={image[0].url} {slug} />    
    {/each}
</div>