<template>
    <section class="flex h-dvh items-center justify-center p-8">
        <div>
            <LogoBaseLine class="w-full" />
            <a
                class="mx-auto text-center py-4 px-6 bg-artway-red w-fit mt-8 text-artway-light-grey font-semibold rounded-full block"
                href="https://expo.dev/artifacts/eas/wR2CjY9rmWtGs3keALWhiX.apk"
                download
                target="_blank"
            >
                Télécharger le prototype en&nbsp;<code>.apk</code>
            </a>
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
