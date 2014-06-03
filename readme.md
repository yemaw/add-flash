## Add Flash

### About
 `add-flash` is an extened middleware of `express-flash`

- `express-flash` use the key-value style flash messages 
- `add-flash` use array style flash messages


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

### Requires
  * express-flash
  * cookieParser
  * session
