<script>
    import { organizations } from "$lib/organizations/data";
    console.log(organizations);
</script>

<div class="min-h-[90vh]">
    <div class="hero py-16 bg-base-200 min-h-[45vh]">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Work in Data4Good!</h1>
                <p class="py-6">
                    A list of organizations that leverage data for social and
                    environmental good.
                </p>
                <div class="alert alert-info mt-5 py-3 px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="stroke-current shrink-0 w-6 h-6"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        /></svg
                    >
                    <span
                        >This website is a living document. Follow <a
                            class="link"
                            href="https://github.com/jstet/data4good.work"
                            >these</a
                        >
                        instructions to suggest changes.</span
                    >
                </div>
            </div>
        </div>
    </div>
    <div id="definition" class="min-h-[45vh] flex max-w-[1200px] m-auto py-12 mb-12">
        <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow card rounded-box items-center">
                <h2 class="text-4xl font-semi-bold px-4 py-12">Definition</h2>
            </div>
            <div class="divider lg:divider-horizontal px-4" />
            <div class="grid flex-grow card rounded-box items-center">
                <p class="px-4 py-2 text-lg max-w-[600px]">
                    <strong>Data4Good</strong> refers to the use of data and analytics
                    for social and environmental good. This can range from data-driven
                    research and analysis, open data initiatives, data visualization,
                    to the development of data-driven tools and platforms. Data4Good
                    is driven by the belief that data can be a powerful force for
                    good, helping to address pressing challenges instead of solely
                    focusing on maximizing profits.
                </p>
            </div>
        </div>
    </div>
</div>
<div id="list" class="max-w-[1200px] m-auto pb-12">
    <div class="px-4">
        <h2 class="text-4xl font-semi-bold py-12 m-auto">
            Organizations
        </h2>
        <div class=" m-auto rounded border-t">
        {#each organizations as organization}
        <div class="grid grid-cols-5  border-x border-b">
            <div class="col-span-5 lg:col-span-2">
                <div class="px-4 pt-3 lg:py-2">
                    <p class="font-bold text-lg mb-3 lg:mb-3">
                        <a href={organization.link} class="link link-hover underline">{organization.name}</a>
                    </p>
                    <div class="flex flex-wrap mb-2">
                        <span
                        class="badge badge-info text-info-content badge-md text-semi-bold mr-2 mb-3"
                        >{organization.type}
                    </span>
                    <span
                        class="badge badge-warning text-warning-content badge-md text-semi-bold mr-2 mb-2"
                        >{organization.sector}
                    </span>
                    {#each organization.data_tech as tech}
                    <span
                        class="badge badge-success text-success-content badge-md text-semi-bold mr-2 mb-2"
                        >{tech}
                    </span>
                    {/each}
                </div>
                </div>
            </div>

            <div class="col-span-5 lg:col-span-3 lg:border-l">
                <div class="px-4 pb-6 lg:py-2">
                    <p class="text-sm">
                        {organization.description}
                    </p>
                </div>
            </div>
        </div>
        {/each}
    </div>
    </div>
</div>