# django-with-vuejs

## Vue CLI

### About Vue CLI
Vue CLI = Vue Command Line Interface

Vue CLI is a full system for rapid Vue.js development and project scaffolding.

Creating a new project using Vue CLI instead of using the <script> tag is in a way similar to creating a Django Project with the startproject command.

It creates most of the initial boilerplate code and configuration jiles that we need automatically, allowing us also to install and integrate extra packages in our projects easily.

### Using Vue CLI:
* We can select the libraries that we want to use immediately, such as Vue Router  
* We can develop the HTML, CSS and JavaScript code for the project according to our needs and preferences, using single file components(.vue), SCSS, TypeScript...
* Ready-to-use Webpack configuration that allows us to group and minify all JS, CSS and dependencies code in bundles to use in production.
* Development server with Hot Module Replacement(HMR), showing us real time browser updates about all the changes we are applying to our application while developing
* Recent versions of Vue CLI also include a Web Interface called Vue UI

### Install Vue CLI
To install Vue CLI in our system we need NPM, Node Package Manager.

NPM is the default package manager for Node.js, the JavaScript runtime environment built on top of Chrome's V8 JavaScript engine, that allows code execution outside of the browser, such as for example as a server side language.

Let's jump to Chrome and let's get started!

```bash
npm i -g @vue/cli

vue create hello-vue


Vue CLI v3.7.0
┌───────────────────────────┐
│  Update available: 4.0.5  │
└───────────────────────────┘
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? No

cd hello-vue
npm run serve
```

## Add signals
```bash
(venv) $ python manage.py shell
Python 3.7.3 (default, Mar 27 2019, 09:23:39) 
[Clang 10.0.0 (clang-1000.11.45.5)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> from django.contrib.auth import get_user_model
>>> custom_user = get_user_model()
>>> u = custom_user.objects.first()
>>> u
<CustomUser: admin>
>>> from questions.models import Question
>>> q = Question.objects.create(author=u, content='First, question! Doew it work?')
>>> q
<Question: First, question! Doew it work?>
>>> q.slug
'first-question-doew-it-work-t8tnmv'
```