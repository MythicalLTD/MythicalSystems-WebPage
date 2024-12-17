export class MdTextParser {
    /**
     * Remove markdown formatting from text
     * @param text The markdown text
     * @returns Plain text without markdown formatting
     */
    static stripMarkdown(text: string): string {
        return text
            .replace(/#{1,6}\s/g, '') // Remove headers
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/\*(.*?)\*/g, '$1') // Remove italic
            .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
            .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // Remove code blocks
            .trim();
    }

    /**
     * Convert markdown text to HTML
     * @param md The markdown text
     * @returns HTML string
     */
    static mdToHtml(md: string): string {
        return md
            .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-semibold text-purple-300">$1</h3>')
            .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-purple-300">$1</h2>')
            .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-semibold text-purple-300">$1</h1>')
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-2xl font-semibold text-purple-300">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="text-2xl font-semibold text-purple-300">$1</em>')
            .replace(
                /```([\s\S]*?)```/g,
                '<pre class="bg-gray-800 text-purple-600 p-4 rounded"><code class="language-ts">$1</code></pre>',
            )
            .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-purple-600 p-1 rounded">$1</code>');
    }
}
