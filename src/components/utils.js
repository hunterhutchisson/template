export const fetchHTML = async (markdown, setHtmlOutput) => {
    let result = (await fetch('https://api.github.com/markdown', {
        method: 'POST',
        headers: {
            'authorization': "token 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",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'mode': 'markdown', 'text': markdown})
    }));
    let data = await result.text()
    setHtmlOutput(data);
}