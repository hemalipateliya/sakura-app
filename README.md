--------------------------------------------------------------------------------------------------------------------
While fetching the data, there was an error of coma in JSON object. SO, I have done this to fetch the data.

fetch("https://private-anon-ce20674572-sakura3.apiary-mock.com/applicants" , {headers:{"Content-Type": 'text/xml'}})
    .then(res => res.text())
    .then(parsedData=>JSON.parse(parsedData.replace(/\,(?!\s*?[\{\[\"\'\w])/g, '')))
    .then(data=>this.setState({data}))


---------------------------------------------------------------------------------------
I have used react-bootsrap-table for styling the table and sorting the data.

