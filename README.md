<h2>Get Request</h2>

<pre>
  <code>
    get(url) {
        fetch(url)
            .then(responseData => responseData.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
  </code>
</pre>


<h2>Post Request</h2>

<pre>
  <code>
    post(url, dataId) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataId)
        })
            .then(responseData => responseData.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
  </code>
</pre>

<h2>Put Request</h2>

<pre>
  <code>
    put(url, dataId) {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataId)
        })
            .then(responseData => responseData.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
  </code>
</pre>

<h2>Delete Request</h2>

<pre>
  <code>
    delete(url) {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(responseData => responseData.json())
            .then(() => console.log('delete data succefully !!!'))
            .catch(error => console.log(error))
    }
  </code>
</pre>









