# ipfs-image-web-upload

Simple uploader/downloader for images stored on ipfs. 

Allows to upload pictures from html `<input type='file' ...>` and use them in `<img src='...'>` tag.

## Usage

To upload image from file input:

```html
<input type='file' id='someFileInputId'>
```

```javascript
var uploader = new IPFSUploader(new IPFS());
var file_input = document.getElementById("someFileInputId");
var hash = await uploader.uploadBlob(e.target.files[0]);
```

To set image to html img element:

```html
<img id='output'>
```


```javascript
var img_tag = document.querySelector( "#output" );
uploader.loadImage(img_tag, hash);
```
