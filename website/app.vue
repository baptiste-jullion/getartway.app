<template>
    <section class="flex h-dvh items-center justify-center p-8">
        <div>
            <LogoBaseLine class="w-full" />
        </div>
        <footer
            class="fixed bottom-0 p-8 font-medium flex w-full flex-wrap justify-between gap-4"
        >
            <a
                href="/user-guide.pdf"
                target="_blank"
                class="flex items-center gap-2"
            >
                <IconGuide class="size-6" />
                <span>Guide utilisateur</span>
            </a>
            <a
                href="https://github.com/baptiste-jullion/getartway.app"
                target="_blank"
                class="flex items-center gap-2"
            >
                <IconGithub class="size-6" />
                <span>Code Source</span>
            </a>
        </footer>
    </section>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Artway | Explorez l'art qui vous entoure",
});
</script>
