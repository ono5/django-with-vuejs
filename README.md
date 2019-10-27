# django-with-vuejs

## Vue js
```bash
vue create frontend


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

 $ cd frontend
 $ npm run serve
```

```bash
vue ui
```

```bash
django-webpack-loader==0.6.0
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