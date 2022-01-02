export const fetchHTML = async (markdown, setHtmlOutput) => {
    let result = (await fetch('https://api.github.com/markdown', {
        method: 'POST',
        headers: {
            'authorization': "token " + "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",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'mode': 'markdown', 'text': markdown})
    }));
    let data = await result.text()
    setHtmlOutput(data);
}