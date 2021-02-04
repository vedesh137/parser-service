#Transcript Parser Service

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/run-collection/eb4383a1dc7746205c44)

Microservice for parsing transcripts

Send a multipart/form-data POST request to /parse with a file with the with the field name 'file'. eg shown below

```html
<form action="/parseForm" enctype="multipart/form-data" method="POST">
    <input name="file" type="file">
    <button type="submit">
        Submit
    </button>
</form>    
```
Note the given  values for name & enctype are required for the service to get the file.