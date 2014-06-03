## Add Flash

### About
 `add-flash` is an extened middleware of `express-flash`

- `express-flash` use the key-value style flash messages 
- `add-flash` use array style flash messages

So, templates don't need to know what's in the flashes and can print directly.


### Installation
 `npm install add-flash`


### Usage

Requirements
 
``` javascript
  var express = require('express');
  var app = express();
  var flash = require('express-flash');
  var session = require('express-session'); 
  var cookieParser = require('cookie-parser');

  app.use(cookieParser('keyboard cat'));
  app.use(session({ cookie: { maxAge: 60000 }}));
  app.use(flash());

```

Add Flash middleware

``` javascript
  var add_flash = require('add-flash'); 
  app.use(add_flash());
```

Use `req.add_flash()` in your middleware

``` javascript
  app.get('/', function (req, res) {
    req.add_flash('info', 'Hello! This is flash from current request.');
    res.render('index', {
      title: 'Home'
    })
  });
  app.get('/addFlash', function (req, res) {
    req.add_flash('success', 'Hello! This is flash from redirected request.');
    res.redirect('/');
  });
```

Access the messages in your views via `locals.flashes` (swig template engine in this case):

``` 
  <div id="flashes">
    {% if flashes %}
        {% for flash in flashes %}
            <div class="alert alert-{{flash.type}}">{{flash.message}}</div>
        {% endfor %}
    {% endif %}
  </div>
```


### API
    req.add_flash(type, message);
    
    type - Flash message type to use in css class. Can use bootstrap css alert types.
    message - Flash message body

    
### Requires
  * express-flash
  * cookieParser
  * session
