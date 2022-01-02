export const fetchHTML = async (markdown, setHtmlOutput) => {
    let result = (await fetch('https://api.github.com/markdown', {
        method: 'POST',
        headers: {
            'authorization': "token " + process.env.REACT_APP_MYKEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'mode': 'markdown', 'text': markdown})
    }));
    let data = await result.text()
    setHtmlOutput(data);
}