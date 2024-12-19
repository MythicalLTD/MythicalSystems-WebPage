/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '@vueuse/sound' {
    export function useSound(url: string): { play: () => void };
}

declare module '*.yml' {
    const content: any;
    export default content;
}  

declare module 'vue-markdown' {

    export function parse(markdown: string): string;

}

declare module '@tawk.to/tawk-messenger-vue-3';
