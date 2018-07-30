# Angular(v4) component that shows a loading bar at the top of a component or module

[![Build Status](https://travis-ci.org/erickknaebel/ng4-loader-bar.svg?branch=master)](https://travis-ci.org/erickknaebel/ng4-loader-bar)
[![dependencies Status](https://david-dm.org/erickknaebel/ng4-loader-bar/status.svg)](https://david-dm.org/erickknaebel/ng4-loader-bar)
[![devDependencies Status](https://david-dm.org/erickknaebel/ng4-loader-bar/dev-status.svg)](https://david-dm.org/erickknaebel/ng4-loader-bar?type=dev)
[![peerDependencies Status](https://david-dm.org/erickknaebel/ng4-loader-bar/peer-status.svg)](https://david-dm.org/erickknaebel/ng4-loader-bar?type=peer)
[![Known Vulnerabilities](https://snyk.io/test/github/erickknaebel/ng4-loader-bar/badge.svg)](https://snyk.io/test/github/erickknaebel/ng4-loader-bar)


## Installation
```sh
npm install ng4-loader-bar --save
```

## Usage
Using SystemJS to load your files may require a update to your config:

```js
System.config({
    map: {
        'ng4-loader-bar': 'node_modules/ng4-loader-bar/bundles/index.umd.js'
    }
});
```

### Update your application/web page with the following markup
- Import the `style.css` into your web page or app.

```json
 "styles": [
    "../node_modules/ng4-loader-bar/bundles/style.css"
 ]
```

- Add the `<ng4-loader-bar></ng4-loader-bar>` component tag within the component you want the loading bar to appear:

```html
<div class="my-component">
    <h1>Component with a loading bar</h1>
    <ng4-loader-bar></ng4-loader-bar>
    ...   
</div>
```

The default styles are:
```css
color: 'red';
height: '2px';
```


### Import `AngularLoadingBarModule`
Import `AngularLoadingBarModule.forRoot()` in the NgModule of your application.

```ts
import {NgModule} from '@angular/core';
import {AngularLoadingBarModule} from 'ng4-loader-bar';

@NgModule({
    imports: [
        BrowserModule,
        AngularLoadingBarModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

Using a shared module allows `AngularLoadingBarModule` to be exported  without having to import it multiple times.

```ts
@NgModule({
    imports: [
        BrowserModule,
        AngularLoadingBarModule.forRoot()
    ],
    exports: [BrowserModule, AngularLoadingBarModule],
})
export class SharedModule {
}
```

### Using `AngularLoadingBarService` in your Angular application
- Import `AngularLoadingBarService` from `ng4-loader-bar`(within your node_modules directory) into your component code:

```js
import {Component} from '@angular/core';
import {AngularLoadingBarService} from 'ng4-loader-bar';

@Component({
    selector: 'app',
    template: `
        <div>Hello world</div>
        <button (click)="startLoadingBar()">Start Loading</button>
        <button (click)="stopLoadingBar()">Stop Loading</button>
        <button (click)="completeLoadingBar()">Complete Loading</button>
        <ng4-loader-bar></ng4-loader-bar>
    `
})
export class AppComponent {
    
    constructor(private angularLoadingBarService: AngularLoadingBarService) { }
    
    startLoadingBar() {
        this.angularLoadingBarService.start();
    }

    stopLoadingBar() {
        this.angularLoadingBarService.stop();
    }

    completeLoadingBar() {
        this.angularLoadingBarService.complete();
    }
}
```

### Customize the `ng4-loader-bar` to tailor to your application

Example: 
`<ng4-loader-bar [color]="'green'" [height]="'6px'"></ng4-loader-bar>`

You can use the following methods to control the SlimLoadingBar via instance of SlimLoadingBarService:
- `start()` - Start the loading progress. Use the callback function as an parameter to listed the complete event.
- `stop()` - Stop the loading progress. This method will pause the progress of the loading bar; `start()` will resume animation from the current position.
- `reset()`- Reset the position of loading progress to 0. This method will stop the current progress animation; using `start()` after `reset()` will start a new animation from 0.
- `complete()` - Set the progress to 100% and hide the progress bar.

##### Credits 
##### Inspired by [ngProgress.js](https://github.com/VictorBjelkholm/ngProgress) and [ng2-slim-loading-bar](https://github.com/akserg/ng2-slim-loading-bar)

###### License
###### [MIT](/LICENSE)
 
