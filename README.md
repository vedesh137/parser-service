#Transcript Parser Service

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/run-collection/eb4383a1dc7746205c44)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uwidcit/parser-service)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

[DEMO](https://uwi-transcript-parser.herokuapp.com/)

[Postman Documentation](https://documenter.getpostman.com/view/583570/TW73FRoP)

Microservice for parsing transcripts

Send a multipart/form-data POST request to /parse endpoint with a file having the field name = 'file'. eg shown below

```html
<form action="/parseForm" enctype="multipart/form-data" method="POST">
    <input name="file" type="file">
    <button type="submit">
        Submit
    </button>
</form>    
```
Note the given  values for name & enctype are required for the service to get the file.